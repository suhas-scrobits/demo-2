import "./CreateGateway.css";
import { useEffect } from "react";
import { Switch } from "antd";
import dropdown from "../../assets/Gateways/drowpdown.svg";
import cross from "../../assets/Gateways/cross.svg";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import callCreateGatewayApi from "./../../api/createGateways";
import callCreateDeviceApi from "./../../api/createDevice";

/* eslint-disable */
interface props {
  handleAddGateway: any;
  getGateways: any;
}

interface Device {
  name: string;
  longitude: string;
  latitude: string;
  file: File | null;
  isToggled: boolean;
}

interface gatewayBody {
  name: string;
  longitude: string;
  latitude: string;
}

interface deviceBody {
  name: string;
  gatewayId: number;
  longitude: string;
  latitude: string;
}

const CreateGateway: React.FC<props> = ({ handleAddGateway, getGateways }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<Device>();

  // const [device, setDevice] = useState<Device>({
  //   name: "",
  //   longitude: "",
  //   latitude: "",
  //   file: null,
  //   isToggled: true,
  // });

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    sessionStorage.getItem("token");
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const onSubmit = async (data: Device) => {
    console.log(data);
    reset();

    if (data.isToggled) {
      const body: gatewayBody = {
        name: data.name,
        longitude: data.longitude,
        latitude: data.latitude,
      };
      try {
        const response = await callCreateGatewayApi(body);
        console.log(response);
        alert(`Your Gateway ${data.name} is created Successfully`);
      } catch (error: any) {
        console.log(error.message);
      }
    } else {
      const body: deviceBody = {
        name: data.name,
        gatewayId: 40,
        longitude: data.longitude,
        latitude: data.latitude,
      };
      try {
        const response = await callCreateDeviceApi(body);
        console.log(response);
        alert(`Your Device ${data.name} is created Successfully`);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    getGateways();
  };

  return (
    <>
      <div className="modal-wrapper" onClick={handleAddGateway}></div>
      <div className="modal-container">
        <div className="head-div">
          <h3>Create Device</h3>
          <img onClick={handleAddGateway} src={cross} alt="close modal" />
        </div>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="name-form form-group">
            <label htmlFor="name">Device Name</label>

            <input
              {...register("name", { required: true })}
              className={errors?.name ? "error" : ""}
              placeholder="Enter Device Name"
              autoComplete="off"
            />
            {errors?.name?.type === "required" && (
              <small>Device name is required</small>
            )}
          </div>

          <div className="name-form">
            <label htmlFor="">Device Location</label>
            <div className="location-div">
              <div className="location-child-divs">
                <input
                  {...register("latitude", { required: true })}
                  className={errors?.latitude ? "error" : ""}
                  placeholder="Enter latitude"
                  autoComplete="off"
                />
                {errors?.latitude?.type === "required" && (
                  <small>Latitude is required</small>
                )}
              </div>

              <div className="location-child-divs">
                <input
                  {...register("longitude", { required: true })}
                  className={errors?.longitude ? "error" : ""}
                  placeholder="Enter longitude"
                  autoComplete="off"
                />
                {errors?.longitude?.type === "required" && (
                  <small>Longitude is required</small>
                )}
              </div>
            </div>

            <h4>Get Current Location</h4>
          </div>

          <div className="toggle-div">
            <Controller
              name="isToggled" // Replace 'toggleValue' with your field name
              control={control}
              defaultValue={true} // Set the initial value of the toggle
              render={({ field }) => (
                <Switch
                  {...field}
                  className="toggleSwitch"
                  checked={field.value} // For Ant Design Switch, the checked prop needs to be set to the field value
                />
              )}
            />

            <img className="dropdown-icon" src={dropdown} alt="dropdown" />
          </div>

          <h4 className="choose-gateway-text">Choose Device as a Gateway</h4>

          <button type="submit" className="create-device">
            Create Device
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateGateway;
