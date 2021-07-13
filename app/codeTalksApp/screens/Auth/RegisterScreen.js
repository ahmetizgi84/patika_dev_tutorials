import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Formik } from 'formik';
import { Layout, InputText, Button } from '../../components'
import * as Yup from 'yup';
import { showMessage } from "react-native-flash-message";
import auth from '@react-native-firebase/auth';
import errorParser from '../../utils/errorParser';

const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Hatalı e-posta adresi').required('Gerekli'),
    password: Yup.string()
        .min(6, 'Çok kısa!')
        .max(50, 'Çok uzun!')
        .required('Gerekli'),
    repassword: Yup.string()
        .min(6, 'Çok kısa!')
        .max(50, 'Çok uzun!')
        .required('Gerekli')
});

const RegisterScreen = ({ navigation }) => {

    const initialValue = {
        email: '',
        password: '',
        repassword: ''
    }

    function handleFormSubmit(formValues) {


        if (formValues.password !== formValues.repassword) {
            showMessage({
                message: "Şifreler aynı değil",
                type: "danger",
            });
            return;
        }

        auth().createUserWithEmailAndPassword(formValues.email, formValues.password)
            .then(() => {
                navigation.navigate("Rooms")
            }).catch(error => {
                showMessage({
                    message: errorParser(error.code),
                    type: "danger",
                });
            })

        // console.log(formValues)
    }

    return (
        <Layout>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>codetalks</Text>
            </View>

            <View style={{ flex: 1 }}>
                <Formik
                    initialValues={initialValue}
                    onSubmit={handleFormSubmit}
                    validationSchema={RegisterSchema}
                >
                    {({ values, handleSubmit, handleChange, errors, touched }) => (
                        <>
                            <InputText
                                value={values.email}
                                onType={handleChange('email')}
                                placeHolder="e-posta adresi giriniz..."
                                isEmail
                            />
                            {errors.email && touched.email ? (
                                <Text style={{ color: 'white' }}>{errors.email}</Text>
                            ) : null}
                            <InputText
                                value={values.password}
                                onType={handleChange('password')}
                                placeHolder="şifre giriniz..."
                                isSecure
                            />
                            {errors.password && touched.password ? (
                                <Text style={{ color: 'white' }}>{errors.password}</Text>
                            ) : null}
                            <InputText
                                value={values.repassword}
                                onType={handleChange('repassword')}
                                placeHolder="şifre tekrar giriniz..."
                                isSecure
                            />
                            {errors.repassword && touched.repassword ? (
                                <Text style={{ color: 'white' }}>{errors.repassword}</Text>
                            ) : null}

                            <Button containerStyle={{ marginTop: 20 }} text="Kayıt Ol" onPress={handleSubmit} />
                        </>
                    )

                    }
                </Formik>
                <Button containerStyle={{ marginTop: 20 }} text="Geri Dön" onPress={() => navigation.goBack()} secondary />
            </View>
        </Layout>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoText: {
        fontSize: 26,
        color: '#E0E0E0'
    }
})
