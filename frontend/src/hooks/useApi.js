import { useState, useEffect } from 'react';

/**
 * Custom hook để quản lý API calls
 * @param {Function} apiFunction - Function gọi API
 * @param {any} initialData - Dữ liệu khởi tạo
 * @param {boolean} executeOnMount - Có gọi API ngay khi mount component không
 */
export const useApi = (apiFunction, initialData = null, executeOnMount = true) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (...params) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction(...params);
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (executeOnMount) {
      execute();
    }
  }, []);

  return {
    data,
    loading,
    error,
    execute,
    setData
  };
};
