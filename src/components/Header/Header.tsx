import styles from './Header.module.scss';
import {PhoneIcon} from './Icones/PhoneIcon';
import {DotIcon} from './Icones/DotIcon';
import {MailIcon} from './Icones/MailIcon';
import {IdCard} from './Icones/IdCard';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    useDisclosure
} from "@nextui-org/react";

import LogoImg from '../../assets/img/Logo.png';
import Button from '../Button/Button.tsx';
import {ArrowDownIcon} from './Icones/ArrowDownIcon';
import {DotsIcon} from './Icones/DotsIcon';
import {IoCloseSharp} from "react-icons/io5";
import {RxCross1} from "react-icons/rx";
import Link from "../Link/Link.tsx";
import React from "react";
import {BsEyeFill, BsEyeSlash} from "react-icons/bs";
import {NavLink} from "react-router-dom";

const Header = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [signState, setSignState] = React.useState(false);

    const [isVisiblePassword, setIsVisiblePassword] = React.useState(false);
    const toggleVisibilityPassword = () => setIsVisiblePassword(!isVisiblePassword);

    const [isVisibleConfirm, setIsVisibleConfirm] = React.useState(false);
    const toggleVisibilityConfirm = () => setIsVisibleConfirm(!isVisibleConfirm);

    const handeSignUp = () => {
        setSignState(false)
        onOpen();
    }

    const handeSignIn = () => {
        setSignState(true);
        onOpen();
    }

    return (
        <div className={styles.header}>
            <div className={styles.header__container_main}>
                <div className={styles.header__main_wrapper}>
                    <img
                        className={`${styles.header__main_avatar} cursor-pointer`}
                        src="https://media.placester.com/image/upload/c_fill,dpr_1.0,f_auto,fl_lossy,h_30,q_auto,w_30/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/e3e66ad5e8ed-headshot.jpg"/>
                    <DotIcon className={styles.header__icon_dot}/>
                    <PhoneIcon className={styles.header__icon}/>
                    <p className={styles.header__main_text}>2147266389</p>
                    <DotIcon className={styles.header__icon_dot}/>
                    <MailIcon className={styles.header__icon}/>
                    <p className={styles.header__main_text}>amber@coreonerealestate.com</p>
                    <DotIcon className={styles.header__icon_dot}/>
                    <IdCard className={styles.header__icon}/>
                    <p className={styles.header__main_text}>609538</p>
                </div>
                <div className={styles.header__main_wrapper}>
                    <div onClick={handeSignIn} className={styles.header__button_in}>Sign In</div>
                    <div onClick={handeSignUp} className={styles.header__button_up}>Sign Up</div>
                </div>
            </div>
            <div className={styles.header__container_nav}>
                <NavLink to={"/"}>
                    <img
                        className={styles.header__nav_img}
                        src={LogoImg}
                    />
                </NavLink>

                <div className={styles.header__nav_wrapper}>
                    <div className={styles.header__nav_button}>
                        <span className={styles.header__text}>Apply</span>
                    </div>
                    <div className={styles.header__nav_button}>
                        <span className={styles.header__text}>Properties</span>
                        <div className={styles.header__nav_dropdown}>
                            <a className={styles.header__nav_link} href="#">Search Properties</a>
                            <a className={styles.header__nav_link} href="#">Featured Properties</a>
                        </div>
                    </div>
                    <ArrowDownIcon className={styles.header__icon_arrow}/>

                    <div className={styles.header__nav_button}>
                        <span className={styles.header__text}>
                            <NavLink className="text-black" to={"/blog"}>
                                Blog
                            </NavLink>
                        </span>
                    </div>
                    <div className={styles.header__nav_button}>
                        <span className={styles.header__text}>
                            <a className={styles.header__nav_link} href="/areas">Areas</a>
                        </span>
                    </div>
                    <div className={styles.header__nav_button}>
                        <NavLink className="text-black" to={"/about"}>
                            <span className={styles.header__text}>About us</span>
                            <div className={styles.header__nav_dropdown}>
                                <p className={styles.header__nav_link}>About</p>
                            </div>
                        </NavLink>
                    </div>
                    <ArrowDownIcon className={styles.header__icon_arrow}/>

                    <div className={styles.header__nav_button}>
                        <span className={styles.header__text}>
                            <NavLink className="text-black" to={"/contact"}>
                                Contact
                            </NavLink>
                        </span>
                    </div>
                    <DotsIcon className={styles.header__icon_dots}/>
                </div>
            </div>
            <Modal backdrop={"blur"} hideCloseButton={true} isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="rounded-none">
                    {(onClose) => (
                        <>
                            {!signState ? (
                                <>
                                    <ModalHeader
                                        className="select-none items-center justify-between flex flex-row gap-1 text-2xl">
                                        Sign up
                                        <IoCloseSharp className="cursor-pointer" onClick={onClose}/>
                                    </ModalHeader>
                                    <ModalBody>
                                        <Input radius="none" className="mt-5 border-2 border-dark-border" required
                                               type="email" label="Email Address"/>
                                        <Input radius="none" className="mt-5 border-2 border-dark-border" required
                                               type="email" label="First Name"/>
                                        <Input radius="none" className="mt-5 border-2 border-dark-border" required
                                               type="email" label="Last Name"/>
                                        <Input
                                            label="Password"
                                            endContent={
                                                <div className="p-0 m-auto flex items-center cursor-pointer"
                                                     onClick={toggleVisibilityPassword}>
                                                    {isVisiblePassword ? (
                                                        <BsEyeSlash
                                                            className="text-2xl text-default-400 pointer-events-none"/>
                                                    ) : (
                                                        <BsEyeFill
                                                            className="text-2xl text-default-400 pointer-events-none"/>
                                                    )}
                                                </div>
                                            }
                                            type={isVisiblePassword ? "text" : "password"}
                                            className="mt-5 border-2 border-dark-border"
                                        />
                                        <p className="text-sm font-bold">
                                            Your password needs:
                                        </p>
                                        <div className="flex flex-row items-center text-sm">
                                            <RxCross1 className="mr-3" color={"red"}/>At least one uppercase letter
                                        </div>
                                        <div className="flex flex-row items-center text-sm">
                                            <RxCross1 className="mr-3" color={"red"}/>At least one special symbol or
                                            number
                                        </div>
                                        <div className="flex flex-row items-center text-sm">
                                            <RxCross1 className="mr-3" color={"red"}/>At least 8 characters
                                        </div>
                                        <Input
                                            label="Confirm password"
                                            endContent={
                                                <div className="p-0 m-auto flex items-center cursor-pointer"
                                                     onClick={toggleVisibilityConfirm}>
                                                    {isVisibleConfirm ? (
                                                        <BsEyeSlash
                                                            className="text-2xl text-default-400 pointer-events-none"/>
                                                    ) : (
                                                        <BsEyeFill
                                                            className="text-2xl text-default-400 pointer-events-none"/>
                                                    )}
                                                </div>
                                            }
                                            type={isVisibleConfirm ? "text" : "password"}
                                            className="mt-5 border-2 border-dark-border"
                                        />
                                    </ModalBody>
                                    <ModalFooter className="mt-4 mb-4 flex-col justify-center items-center">
                                        <Button className="px-20" message={"Sign Up"} onPress={onClose}/>
                                        <span className="mt-4"/>
                                        <Link onPress={handeSignIn}>Already a User? Sign In</Link>
                                    </ModalFooter>
                                </>
                            ) : (
                                <>
                                    <ModalHeader
                                        className="select-none items-center justify-between flex flex-row gap-1 text-2xl">
                                        Sign In
                                        <IoCloseSharp className="cursor-pointer" onClick={onClose}/>
                                    </ModalHeader>
                                    <ModalBody>
                                        <Input radius="none" className="mt-5 border-2 border-dark-border" required
                                               type="email" label="Email Address"/>
                                        <Input
                                            label="Password"
                                            endContent={
                                                <div className="p-0 m-auto flex items-center cursor-pointer"
                                                     onClick={toggleVisibilityPassword}>
                                                    {isVisiblePassword ? (
                                                        <BsEyeSlash
                                                            className="text-2xl text-default-400 pointer-events-none"/>
                                                    ) : (
                                                        <BsEyeFill
                                                            className="text-2xl text-default-400 pointer-events-none"/>
                                                    )}
                                                </div>
                                            }
                                            type={isVisiblePassword ? "text" : "password"}
                                            className="mt-5 border-2 border-dark-border"
                                        />
                                    </ModalBody>
                                    <ModalFooter className="mt-4 mb-4 flex-col justify-center items-center">
                                        <Button className="px-20" message={"Sign In"} onPress={onClose}/>
                                        <span className="mt-4"/>
                                        <Link onPress={handeSignUp}>Forgot your password?</Link>
                                        <Link onPress={handeSignUp}>Create an account</Link>
                                    </ModalFooter>
                                </>
                            )}
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}

export default Header;
