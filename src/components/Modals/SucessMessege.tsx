import { Modal } from "antd";
import SucessTick from "../../assets/modals/SucessTick.svg";

interface SuccessModalProps {
  visible: boolean;
  email: string;
  onClose: () => void;
}

const SuccessMessege: React.FC<SuccessModalProps> = ({
  visible,
  onClose,
  email,
}) => {
  return (
    <Modal title="Success" open={visible} onCancel={onClose} footer={null}>
      <div
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <img src={SucessTick} alt="SucessTick" />
        <p>
          We have sent a link to login to your account to your Email ID: {email}
          .
        </p>
        <button type="submit" onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default SuccessMessege;
