import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";


export const DataContext = createContext();
function Featchapi({ children }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then((resdata) => {
                if (Array.isArray(resdata)) {
                    setData(resdata);
                } else {
                    console.error("Unexpected data format:", resdata);
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <DataContext.Provider value={{ data, loading }}>
            {children}
        </DataContext.Provider>
    );
}

Featchapi.propTypes = {
    children: PropTypes.node.isRequired
};
export default Featchapi