import axios from "axios";

const PYTHON_API = process.env.PYTHON_API;

const askQuestion = async (req, res) => {

    try {

        const { question } = req.body;

        const response = await axios.post(
            `${PYTHON_API}/question`,
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