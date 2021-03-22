import { useHistory, useParams } from "react-router-dom";
import { Button, Box, Typography } from "@material-ui/core";

const Error = () => {
    const history = useHistory();
    const { message } = useParams();
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignContent="center"
            spacing={3}
        >
            <Box alignSelf="center" xs={12}>
                <Typography variant="h1" component="h2" gutterBottom>
                    {message}
                </Typography>
            </Box>
            <Box alignSelf="center" xs={12}>
                <div>
                    <img
                        class="col-12"
                        src="/images/error.png"
                        alt="Page Not Found"
                    />
                </div>
            </Box>

            <Box alignSelf="center" m={2} xs={12}>
                <Button variant="contained" onClick={() => history.goBack()}>
                    Back
                </Button>
            </Box>
        </Box>
    );
};

export default Error;
