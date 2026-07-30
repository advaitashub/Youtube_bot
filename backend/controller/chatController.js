import axios from "axios";
const PYTHON_API = process.env.PYTHON_API;


const chatWithVideo = async (req, res) => {

    try {

        const { url } = req.body;

        const response = await axios.post(
            `${PYTHON_API}/chat`,
            { url }
        );

        res.json(response.data);

    } catch (error) {

        console.error("Message:", error.message);

        if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Response:", error.response.data);
        } else {
           console.error(error);
         }

    }

};

export default chatWithVideo;