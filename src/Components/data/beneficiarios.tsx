import { useState, useEffect } from "react";

const beneficiariosData = () => {
    const [beneficiarios, setBeneficiarios] = useState<Array<{id: string; email: string; name: string; address: {street: string}}>>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setBeneficiarios(data))
        .catch(error => console.error('Error fetching beneficiarios:', error));
    }, []);

    return beneficiarios;
}
export default beneficiariosData;