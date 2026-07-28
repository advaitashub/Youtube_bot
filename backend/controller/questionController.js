import axios from "axios";

const askQuestion = async (req, res) => {

    try {

        const { question } = req.body;

        const response = await axios.post(
            "http://127.0.0.1:8000/question",
            { question }
        );

        res.json(response.data);

    } catch (error) {

        console.log(error.message);

        res.status(500).json({
            success: false,
            message: "Unable to answer question"
        });

    }

};

export default askQuestion;