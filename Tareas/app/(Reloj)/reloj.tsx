import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RelojDigital() {
    const [hora, setHora] = useState('');// Use useState para almacenar la hora y causar un re-render cuando cambie

    useEffect(() => {
        const actualizarHora = () => { // Función para actualizar la hora
            const fechaActual = new Date();
            const horas = String(fechaActual.getHours()).padStart(2, '0'); // Horas con 2 dígitos
            const minutos = String(fechaActual.getMinutes()).padStart(2, '0'); // Minutos con 2 dígitos
            const segundos = String(fechaActual.getSeconds()).padStart(2, '0'); // Segundos con 2 dígitos

            setHora(`${horas}:${minutos}:${segundos}`); // Para actualizar el estado de la hora
        };

        const intervalo = setInterval(actualizarHora, 1000); // Use setInterval para actualizar la hora cada segundo

        // Llame a la función una vez al principio para mostrar la hora inmediatamente
        actualizarHora();

        // Para limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalo);
    }, []); // Se ejecuta solo una vez cuando el componente se monta

    return (
        //Mostrar la hora en formato HH:mm:ss 
        <View style={styles.container}>
            Mostrar la hora en formato HH:mm:ss 
            <Text style={styles.reloj}>{hora}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Fondo claro
    },
    reloj: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#000', // Color de texto negro
    },
});
