import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import { Formik } from 'formik';
import errorParser from '../../utils/errorParser';
import { Layout, InputText, Button } from '../../components'
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Hatalı e-posta adresi').required('Gerekli'),
    password: Yup.string()
        .min(5, 'Çok kısa!')
        .max(50, 'Çok uzun!')
        .required('Gerekli')
});

const LoginScreen = ({ navigation }) => {
    const [loading, setLoading] = React.useState(false)

    const initialValue = {
        email: '',
        password: ''
    }

    function handleFormSubmit(formValues) {
        setLoading(true)
        auth().signInWithEmailAndPassword(formValues.email, formValues.password)
            .then(() => {
                navigation.navigate("Rooms")
                setLoading(false)
            }).catch(error => {
                showMessage({
                    message: errorParser(error.code),
                    type: "danger",
                });
                setLoading(false)
                //console.log(error.code)
            });
    }

    return (
        <Layout>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>codetalks</Text>
            </View>

            <View style={{ flex: 1 }}>
                <Formik initialValues={initialValue} onSubmit={handleFormSubmit} validationSchema={LoginSchema}>
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

                            <Button
                                containerStyle={{ marginTop: 20 }}
                                text="Giriş Yap"
                                onPress={handleSubmit}
                                loading={loading}
                            />
                        </>
                    )

                    }
                </Formik>
                <Button containerStyle={{ marginTop: 20 }} text="Kayıt Ol" onPress={() => navigation.navigate("Register")} secondary />
            </View>
        </Layout>
    )
}

export default LoginScreen

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
