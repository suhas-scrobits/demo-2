import { Table, Avatar, Spin } from "antd";
import { useState, useEffect } from "react";
import "./../main/Main.css";
import CreateOrganizationModal from "./../modals/CreateOrganizationModal";
import { GetallOrgs, Organization } from "./../../api/getallOrgs";

const bin = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.2466 21.9999C10.8916 21.9999 9.5706 21.9849 8.2636 21.9579C6.5916 21.9249 5.4346 20.8409 5.2456 19.1289C4.9306 16.2889 4.3916 9.59491 4.3866 9.52791C4.3526 9.11491 4.6606 8.75291 5.0736 8.71991C5.4806 8.70891 5.8486 8.99491 5.8816 9.40691C5.8866 9.47491 6.4246 16.1459 6.7366 18.9639C6.8436 19.9369 7.3686 20.4389 8.2946 20.4579C10.7946 20.5109 13.3456 20.5139 16.0956 20.4639C17.0796 20.4449 17.6116 19.9529 17.7216 18.9569C18.0316 16.1629 18.5716 9.47491 18.5776 9.40691C18.6106 8.99491 18.9756 8.70691 19.3846 8.71991C19.7976 8.75391 20.1056 9.11491 20.0726 9.52791C20.0666 9.59591 19.5246 16.3069 19.2126 19.1219C19.0186 20.8689 17.8646 21.9319 16.1226 21.9639C14.7896 21.9869 13.5036 21.9999 12.2466 21.9999Z"
      fill="#3F3F3F"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.708 6.98926H3.75C3.336 6.98926 3 6.65326 3 6.23926C3 5.82526 3.336 5.48926 3.75 5.48926H20.708C21.122 5.48926 21.458 5.82526 21.458 6.23926C21.458 6.65326 21.122 6.98926 20.708 6.98926Z"
      fill="#3F3F3F"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.4403 6.98924C16.3023 6.98924 15.3143 6.17824 15.0903 5.06224L14.8473 3.84624C14.7963 3.66124 14.5853 3.50024 14.3453 3.50024H10.1123C9.87233 3.50024 9.66133 3.66124 9.60033 3.89224L9.36733 5.06224C9.14433 6.17824 8.15533 6.98924 7.01733 6.98924C6.60333 6.98924 6.26733 6.65324 6.26733 6.23924C6.26733 5.82524 6.60333 5.48924 7.01733 5.48924C7.44333 5.48924 7.81333 5.18524 7.89733 4.76724L8.14033 3.55124C8.38733 2.61924 9.19433 2.00024 10.1123 2.00024H14.3453C15.2633 2.00024 16.0703 2.61924 16.3073 3.50624L16.5613 4.76724C16.6443 5.18524 17.0143 5.48924 17.4403 5.48924C17.8543 5.48924 18.1903 5.82524 18.1903 6.23924C18.1903 6.65324 17.8543 6.98924 17.4403 6.98924Z"
      fill="#3F3F3F"
    />
  </svg>
);

type DataType = {
  key: string;
  fullName: string;
  phone: string;
  address: string;
};

const OrgTableContent = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    // Fetch organizations data from the API
    /* eslint-disable */
    fetchOrganizations();
  }, []);

  const fetchOrganizations = async () => {
    try {
      const organizations: Organization[] = await GetallOrgs();
      // Transform the fetched Organization data into DataType format
      const transformedData: DataType[] = organizations.map((org) => ({
        key: org.id.toString(),
        fullName: org.name,
        phone: org.phone,
        address: org.address,
      }));

      setData(transformedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching organizations:", error);
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "name",
      render: (fullName: string) => (
        <div>
          <Avatar
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="User Avatar"
          />
          <span style={{ marginLeft: "8px" }}>{fullName}</span>
        </div>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (data: DataType) => {
        console.log(data);
        return bin;
      },
    },
  ];
  const handleOrganizationAdded = () => {
    // Call this function after new organization is added through CreateOrganizationModal
    // to refresh the data in the table
    /* eslint-disable */
    fetchOrganizations();
  };

  return (
    <div className="tableContent">
      <div className="create-org-div-parent">
        <CreateOrganizationModal
          onOrganizationAdded={handleOrganizationAdded}
        />
      </div>
      {/* Add container for spinner */}
      {loading ? (
        <div className="spinner-container">
          <Spin size="large" />
        </div>
      ) : (
        <Table columns={columns} dataSource={data} />
      )}
    </div>
  );
};

export default OrgTableContent;
