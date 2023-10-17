import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { CrossSquared, HidePasswordIcon, LineArrow, LogoSvg, ViewPasswordIcon } from "../assets/ThemeSvg";
import { maxBounds, minBounds, Patterns, VALIDATIONS_TEXT } from "../constants/constants";
import { Sign_UP } from "../services/auth";

const SignUp = () => {
    const navigate = useNavigate();
    const [passwordShow, setPasswordShow] = useState(false);
    const [CpasswordShow, setCPasswordShow] = useState(false);

    const [disable, setDisable] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onChange",
        criteriaMode: "firstError",
        shouldFocusError: true,
    });

    const passwordWatch = useRef({});
    passwordWatch.current = watch("password", "");

    const onSubmit = async (data) => {
        setDisable(true);
        try {
            const response = await Sign_UP(data)
            console.log(response, 'response');
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
            // navigate('/dashboard')
            setDisable(false);
        }
        catch (errors) {
            console.log(errors, 'error');
            toast.error(errors?.response?.data?.message[0])
            setDisable(false);
        }

    }
    return (
        <div className={"subAuthContainer signIn"}>
            <ToastContainer />

            <div>
                <Link to={"/"} className={"close-square m-r-20"}>
                    <CrossSquared />
                </Link>

            </div>

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
                            <Form.Label>User NAme</Form.Label>
                            <InputGroup className={errors.signInPassword ? "hasError" : ""}>
                                <Form.Control
                                    type={"text"}
                                    placeholder="username"
                                    aria-describedby="passToggle"
                                    className={"passwordControl"}
                                    minLength={minBounds.PASSWORD}
                                    maxLength={maxBounds.PASSWORD}
                                    autoComplete="off"
                                    role={"presentation"}
                                    {...register("username", {
                                        required: {
                                            value: true,
                                            message: VALIDATIONS_TEXT.PASSWORD_REQUIRED
                                        },
                                        maxLength: {
                                            value: 25,
                                            message: 'max length is 25'
                                        }
                                    })}
                                />
                            </InputGroup>

                            {errors.username && <Form.Text>{errors.username.message}</Form.Text>}
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
                        <Form.Group className="themeInputGroup passwordInput mb-3" controlId="signInPassword">
                            <Form.Label>Cnfrm Password</Form.Label>
                            <InputGroup className={errors.signInPassword ? "hasError" : ""}>
                                <Form.Control
                                    type={CpasswordShow ? "text" : "password"}
                                    placeholder="••••••••"
                                    aria-describedby="passToggle"
                                    className={"passwordControl"}
                                    minLength={minBounds.PASSWORD}
                                    maxLength={maxBounds.PASSWORD}
                                    autoComplete="off"
                                    role={"presentation"}
                                    {...register("cnfrm_password", {
                                        validate: value => value === passwordWatch.current || "The passwords do not match",
                                        required: {
                                            value: true,
                                            message: VALIDATIONS_TEXT.PASSWORD_REQUIRED
                                        },
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
                                <Button type={"button"} className={"btn-togglePassword"} variant="outline-secondary" id="passToggle" onClick={() => setCPasswordShow(!CpasswordShow)}>
                                    {
                                        CpasswordShow ? <HidePasswordIcon /> : <ViewPasswordIcon />
                                    }
                                </Button>
                            </InputGroup>

                            {errors.cnfrm_password && <Form.Text>{errors.cnfrm_password.message}</Form.Text>}
                        </Form.Group>
                    </Col>

                    <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                        <Button type={"submit"} className={"w-100 btn-submit m-t-50"} disabled={disable ? true : false}>
                            {
                                !disable ? <>Submit <LineArrow /></> : <div className="load black"></div>
                            }
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default SignUp