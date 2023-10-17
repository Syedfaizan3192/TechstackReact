import React, { useEffect, useState } from "react";
// import { HidePasswordIcon, LineArrow, LogoSvg, ViewPasswordIcon } from "../../components/ThemeSvgs";
import { useForm } from "react-hook-form";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { maxBounds, minBounds, Patterns, VALIDATIONS_TEXT } from "../constants/constants";
import { HidePasswordIcon, LineArrow, LogoSvg, ViewPasswordIcon } from "../assets/ThemeSvg";
import { LogIn } from "../services/auth";
import { SetAuthUserLocalStorage } from "../services/localstorage";

const Login = () => {
    const navigate = useNavigate();
    const [passwordShow, setPasswordShow] = useState(false);
    const [disable, setDisable] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onChange",
        criteriaMode: "firstError",
        shouldFocusError: true,
    });


    const onSubmit = async (data) => {
        setDisable(true);
        try {
            const response = await LogIn(data)
            SetAuthUserLocalStorage(response?.data?.data)
            setTimeout(function () {
                toast.success(response?.data?.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }, 1500);
            navigate('/dashboard')
            setDisable(false);
        }
        catch (errors) {
            toast.error(errors?.response?.data?.message[0])
            setDisable(false);
        }

    }

    return (
        <>
            <ToastContainer />
            <div className={"subAuthContainer signIn"}>

                <h3 className={"heading-small m-t-50 m-b-30"}>Sign In to Rum</h3>

                <Form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
                    <Row>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                            <Form.Group className="themeInputGroup mb-3" controlId="signInEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="youremail@gmail.com"
                                    autoComplete="off"
                                    role={"presentation"}
                                    className={errors.signInEmail ? "hasError" : ""}
                                    maxLength={maxBounds.EMAIL}
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: VALIDATIONS_TEXT.EMAIL_REQUIRED
                                        },
                                        pattern: {
                                            value: Patterns.Email,
                                            message: VALIDATIONS_TEXT.EMAIL_PATTERN
                                        },
                                        maxLength: {
                                            value: maxBounds.EMAIL,
                                            message: VALIDATIONS_TEXT.EMAIL_MAX
                                        }
                                    })}
                                />
                                {errors.email && <Form.Text>{errors.email.message}</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                            <Form.Group className="themeInputGroup passwordInput mb-3" controlId="signInPassword">
                                <Form.Label>Password</Form.Label>
                                <InputGroup className={errors.signInPassword ? "hasError" : ""}>
                                    <Form.Control
                                        type={passwordShow ? "text" : "password"}
                                        placeholder="••••••••"
                                        aria-describedby="passToggle"
                                        className={"passwordControl"}
                                        minLength={minBounds.PASSWORD}
                                        maxLength={maxBounds.PASSWORD}
                                        autoComplete="off"
                                        role={"presentation"}
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: VALIDATIONS_TEXT.PASSWORD_REQUIRED
                                            },
                                            // pattern: {
                                            //     value: Patterns.Password,
                                            //     message: VALIDATIONS_TEXT.PASSWORD_PATTERN,
                                            // },
                                            minLength: {
                                                value: minBounds.PASSWORD,
                                                message: VALIDATIONS_TEXT.PASSWORD_MIN
                                            },
                                            maxLength: {
                                                value: maxBounds.PASSWORD,
                                                message: VALIDATIONS_TEXT.PASSWORD_MAX
                                            }
                                        })}
                                    />
                                    <Button type={"button"} className={"btn-togglePassword"} variant="outline-secondary" id="passToggle" onClick={() => setPasswordShow(!passwordShow)}>
                                        {
                                            passwordShow ? <HidePasswordIcon /> : <ViewPasswordIcon />
                                        }
                                    </Button>
                                </InputGroup>

                                {errors.password && <Form.Text>{errors.password.message}</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                            <Button type={"submit"} className={"w-100 btn-submit m-t-50"} disabled={disable ? true : false}>
                                {
                                    !disable ? <>Submit <LineArrow /></> : <div className="load black"></div>
                                }
                            </Button>
                            <p className={"text-center m-t-20"}>Don’t have an account? <Link to={"/sign-up"} className={"link-inline"}>Get started</Link></p>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}

export default Login