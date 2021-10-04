import { useEffect, useState } from "react"

const useServices = (id) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./fakeData.json')
      .then(res => res.json())
      .then(data => setServices(data));
  }, [id]);

  return [services, setServices];
}

export default useServices;