import axios from "axios";

const chatWithVideo = async (req, res) => {

    try {

        const { url } = req.body;

        const response = await axios.post(
            `${PYTHON_API}/chat`,
            { url }
        );

        res.json(response.data);

    } catch (error) {

        console.log(error.message);

        res.status(500).json({
            success: false,
            message: "Unable to process video"
        });

    }

};

export default chatWithVideo;