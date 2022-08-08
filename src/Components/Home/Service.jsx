import { useParams } from "react-router-dom";
import { getService } from "../../data/servicesData";

export default function Service() {
  let params = useParams(serviceId);
  let service = getService(params.serviceId);
  console.log(service);
  return <h2>Service: {service.title}</h2>;
}
