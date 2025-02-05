import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PantallaDeCarga() {
    // Use useRef para almacenar el estado cargando
    const cargandoRef = useRef(true);
    const renderTrigger = useRef(0);  // Use esta referencia para forzar el re-renderizado

    useEffect(() => {
        // Use setTimeout para cambiar cargandoRef.current a false después de 3 segundos
        const timeout = setTimeout(() => {
            cargandoRef.current = false;
            renderTrigger.current += 1;  // Cambiar renderTrigger para forzar un re-renderizado
        }, 3); // 3 segundos

        // Limpiar el timeout cuando el componente se desmonte
        return () => clearTimeout(timeout);
    }, []); // Se ejecuta solo una vez cuando el componente se monta


    return (
        <View style={styles.container}>
            {/* Mostrar "Cargando..." si cargandoRef.current es true */}
            {/* Mostrar "Bienvenido a la aplicación"  */}
            <Text style={styles.texto}>
                {cargandoRef.current ? 'Cargando...' : 'Bienvenido a la aplicación'}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Fondo claro
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333', // Color de texto oscuro
    },
});
