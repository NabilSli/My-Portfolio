import React from "react";
import { useEffect, useState } from "react";

// NOTE: preparing API integration by fetching the data with an async function
export default function useProjects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      setLoading(true);
      fetch("/data/projectData.json")
        .then((response) => {
          return response.json();
        })
        .then((jsonResponse) => {
          setProjects(jsonResponse);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    return () => {
      ignore = true;
    };
  }, []);

  return { isLoading, error, projects };
}
