//make a modal
import { useForm, Controller } from "react-hook-form";
import { Modal } from "antd";
import SuccessMessege from "./SucessMessege";
import { useState } from "react";
import "./Modal.css";
import Plus from "../../assets/main/Plus";
import Business from "../../assets/main/Business.svg";
import { addUserData } from "../../api/createUser";
import Email from "../../assets/main/Email.svg";
import Profile from "../../assets/main/Profile.svg";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Organization } from "../../api/getallOrgs";

/* eslint-disable */
interface IFormInput {
  email: string;
  businessName: string; // New field: Business name
  // New field: Address
  phone: string;
  organizationId: any;
  name: string; // New field: Phone
}
interface CreateUserModalProps {
  onUserAdded: () => void; // Prop to handle user addition
  organizations: Organization[];
}
function CreateUserModal({ onUserAdded, organizations }: CreateUserModalProps) {
  const {
    register,
    handleSubmit,

    formState: { errors },
    control, // Add control from react-hook-form
  } = useForm<IFormInput>();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const toggleModal = () => {
    setIsModalVisible((prevState) => !prevState);
  };

  //validation logics
  // const watchedEmail = watch("email");
  // useEffect(() => {
  //     if (watchedEmail) {
  //       const isValidEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(watchedEmail);
  //       setError("email", {
  //         type: isValidEmail ? "manual" : "pattern",
  //         message: isValidEmail ? "" : "Invalid email format",
  //       });
  //     }
  //   }, [watchedEmail, setError]);

  const onSubmit = async (data: IFormInput) => {
    // Check if the business name, address, and phone are not empty

    if (!data.phone.trim()) {
      alert("Phone is required.");
      return;
    }
    //if email isnt in correct format

    if (!data.email.trim()) {
      alert("Email is required.");
      return;
    }

    try {
      // Call the addUserData function and pass the form data
      const orgId = parseInt(data.organizationId);
      console.log(data);
      console.log("data.organizationId:", data.organizationId);
      console.log("orgId:", orgId);

      await addUserData({
        name: data.name,
        phone: data.phone,
        email: data.email,
        orgId: orgId,
      });

      // Do further processing or API call here after successful validation

      // For demonstration, we'll just log the form data and navigate to dashboard

      // navigate("/Dashboard");
      alert(data.name + " added successfully");
      onUserAdded();
      setIsSuccessModalVisible(true);
      setSubmittedEmail(data.email);
      setIsModalVisible(false); // Hide the modal after successful form submission
    } catch (error) {
      console.error("Error adding user data:", error);
      alert("Failed to add user data.");
    }
  };

  return (
    <div>
      <button className="modalbutton" onClick={toggleModal}>
        <div className="plus">
          Create User <Plus />{" "}
        </div>
      </button>

      {/* Modal */}
      <Modal
        title="User Registration"
        visible={isModalVisible}
        onCancel={toggleModal}
        footer={null}
      >
        <form className="adminloginForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="EmailInput">
            <label>Email</label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
              })}
              className={errors?.email && "LoginWarning"}
              placeholder="Enter your email"
              //   onChange={() => trigger("email")} // Trigger validation on input change
              style={{
                backgroundImage: `url(${Email})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "24px 10px",
              }}
            />
            {errors?.email?.type === "required" && (
              <p className="LoginWarning">Email is required</p>
            )}
            {errors?.email?.type === "pattern" && (
              <p className="LoginWarning">Invalid email format</p>
            )}
          </div>
          <div className="UserFullName">
            <label>Full Name</label>
            <input
              {...register("name", { required: true })}
              className={errors?.name && "LoginWarning"}
              placeholder="Enter your full name"
              style={{
                backgroundImage: `url(${Profile})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "24px 10px",
              }}
            />
            {errors?.name?.type === "required" && (
              <p className="LoginWarning">Full name is required</p>
            )}
          </div>
          <div className="PhoneInput">
            <label>Phone</label>
            <Controller
              name="phone"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <ReactPhoneInput
                    country={"in"}
                    inputClass={errors?.phone && "LoginWarning"}
                    onChange={(value: string) => field.onChange(value)}
                    value={field.value}
                  />
                  {errors?.phone?.type === "required" && (
                    <p className="LoginWarning">Phone is required</p>
                  )}
                </>
              )}
            />
          </div>

          <div className="OrganizationSelect">
            <label>Select Organization</label>
            <select
              {...register("organizationId", { required: true })}
              className={errors?.organizationId && "LoginWarning"}
              style={{
                backgroundImage: `url(${Business})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "24px 10px",
              }}
            >
              <option value="">Select an organization</option>
              {organizations.map((org) => (
                <option key={org.id} value={org.id}>
                  {org.name}
                </option>
              ))}
            </select>
            {errors?.organizationId?.type === "required" && (
              <p className="LoginWarning">Please select an organization</p>
            )}
          </div>

          <input type="submit" value="Create Organization" />
        </form>
      </Modal>
      <SuccessMessege
        visible={isSuccessModalVisible}
        onClose={() => setIsSuccessModalVisible(false)}
        email={submittedEmail}
      />
    </div>
  );
}

export default CreateUserModal;
