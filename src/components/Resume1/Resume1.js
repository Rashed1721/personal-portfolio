
import { Button } from 'react-bootstrap';
const url = "https://drive.google.com/file/d/1L4UYcejfoP8XjjZ4djDXR1TZBx-5gawM/preview"

const Resume1 = () => {


    return (
        <>
            <div className='container ' style={{ marginTop: "100px" }} >
                <a href="https://drive.google.com/file/d/1L4UYcejfoP8XjjZ4djDXR1TZBx-5gawM/view?usp=sharing" target="_blank"> <Button style={{ "&:hover": { background: "red" }, border: "2px solid red" }} type="button" class="btn btn-primary">Download CV</Button></a>

            </div>
            <div className='container ' >
                <iframe style={{ marginTop: "10px" }} src={url} width="640" height="780" allow="autoplay" >  </iframe>

            </div >
        </>
    );
};

export default Resume1;