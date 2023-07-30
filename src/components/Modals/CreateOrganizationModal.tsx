//make a modal
import { useForm, Controller } from "react-hook-form";
import { Modal, message } from "antd";
import { createOrganization } from "../../api/createOrg";
import { useState } from "react";
import "./Modal.css";
import Plus from "../../assets/Plus";
import Business from "../../assets/Business.svg";
import Companyid from "./../../assets/CompanyId.svg";
import Gst from "./../../assets/Gst.svg";

import Profile from "../../assets/Profile.svg";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

/* eslint-disable */
interface IFormInput {
  name: string; // New field: Business name
  phone: string;
  fullname: string; // New field: Phone
  address: string;
  registeredCompanyId: string;
  gstNo: string;
}
interface CreateOrganizationModalProps {
  onOrganizationAdded: () => void; // Prop to handle organization addition
}

function CreateOrganizationModal({
  onOrganizationAdded,
}: CreateOrganizationModalProps) {
  const {
    register,
    handleSubmit,

    formState: { errors },
    control, // Add control from react-hook-form
  } = useForm<IFormInput>();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((prevState) => !prevState);
  };

  const onSubmit = async (data: IFormInput) => {
    // Check if the business name, address, and phone are not empty
    if (!data.name.trim()) {
      alert("Business name is required.");
      return;
    }

    if (!data.phone.trim()) {
      alert("Phone is required.");
      return;
    }
    try {
      // Call the createOrganization function and pass the form data and jwtToken
      await createOrganization({
        name: data.name,
        address: data.address,
        phone: data.phone,
        registeredCompanyId: data.registeredCompanyId,
        gstNo: data.gstNo,
      });
    } catch (error) {
      console.error("Error creating organization:", error);
      message.error("Failed to create organization.");
    }

    console.log(data);
    // navigate("/Dashboard");
    alert("Addition sucessful");
    onOrganizationAdded(); // Call the prop function to update the organization list
    setIsModalVisible(false); // Hide the modal after successful form submission
  };

  return (
    <div>
      <button className="modalbutton" onClick={toggleModal}>
        <div className="plus">
          Create Organization <Plus />{" "}
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
          <div className="UserFullName">
            <label>Company Name</label>
            <input
              {...register("name", { required: true })}
              className={errors?.fullname && "LoginWarning"}
              placeholder="Enter your full name"
              style={{
                backgroundImage: `url(${Profile})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "24px 10px",
              }}
            />
            {errors?.fullname?.type === "required" && (
              <p className="LoginWarning">Full name is required</p>
            )}
          </div>
          <div className="UserFullName">
            <label>Address</label>
            <textarea
              {...register("address", { required: true })}
              className={errors?.fullname && "LoginWarning"}
              placeholder="S. no.- 131/A/1/1, Gitanjali Colony, Warje, Pune, Maharashtra 411058"
              style={{
                backgroundImage: `url(${Business})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "24px 10px",
              }}
            />
            {errors?.fullname?.type === "required" && (
              <p className="LoginWarning">Address is required</p>
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

          <div className="BusinessNameInput">
            <label>Registered Company ID</label>
            <input
              {...register("registeredCompanyId", { required: true })}
              className={errors?.registeredCompanyId && "LoginWarning"}
              placeholder="Enter your business name"
              style={{
                backgroundImage: `url(${Companyid})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "24px 10px",
              }}
            />
            {errors?.registeredCompanyId?.type === "required" && (
              <p className="LoginWarning">Registered Company ID</p>
            )}
          </div>
          <div className="BusinessNameInput">
            <label>GST No</label>
            <input
              {...register("gstNo", { required: true })}
              className={errors?.gstNo && "LoginWarning"}
              placeholder="Enter your business name"
              style={{
                backgroundImage: `url(${Gst})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "24px 10px",
              }}
            />
            {errors?.gstNo?.type === "required" && (
              <p className="LoginWarning">Registered Company ID</p>
            )}
          </div>

          <input type="submit" value="Create Organization" />
        </form>
      </Modal>
    </div>
  );
}

export default CreateOrganizationModal;
