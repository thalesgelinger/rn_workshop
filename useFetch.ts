import axios from 'axios';
import {useEffect, useState} from 'react';

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetchEquipments();
  }, []);

  const fetchEquipments = async () => {
    try {
      setLoading(true);
      const {data} = await axios.get(url);
      setData(data);
      setError();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
  };
};
