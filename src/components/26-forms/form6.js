import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import * as Yup from "yup";
/* yapin icndeki herseyi import et isim olaka yup kullanacagim Yup.object as isim alias isim atamak icin Yup */
const Form6 = () => {

    const initialValues = {/* ismi boyle koyarsak daha guzel olur */
        email:"",
        password:"",
        rememner: false
    }
    /* remember beni hatirla butunu gorevi goruyor. Check me out tikladiginda locale stroge de token ttuyor */
    const validationSchema = Yup.object({
        email: Yup.string()
        .email("Gecerli bir eposta giriniz").required("Bos gecemeyiniz"),
        password: Yup.string().required("Sifrenizi giriniz")
    });
    /* program akisi validationShema dan gecerse onSubmit e girer. */
    const onSubmit = async (values) => {
        try {
            const resp = await axios.post("https://carrental-v3-backend.herokuapp.com/login", values);
            console.log(resp.data);
            localStorage.setItem("token", resp.data.token)
            
        } catch (err) {
            console.log(err);
            alert(err.response.data.message);
        }
      };

    const formik = useFormik({/* useF. bekledigi tanidigi varelri istiyor ve onlarim tanimladiklarini istiyor ma js diyor key ve value isimleri ayniysa asagidaki sekilde yazilabilir */
        initialValues,
        validationSchema,
        onSubmit
    })




    return (
        <Container className="mt-5">
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...formik.getFieldProps("email")}
                isInvalid={formik.touched.email && !!formik.errors.email}
                isValid={formik.touched.email && !formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
                isInvalid={formik.touched.password && !!formik.errors.password}
                isValid={formik.touched.password && !formik.errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Check me out"
                {...formik.getFieldProps("remember")}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      );
    };
    export default Form6;