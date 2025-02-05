import { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Animated } from "react-native";

export default function ContadorScreen() {
  // Estado para llevar el conteo
  const [contador, setContador] = useState(0);

  // Animación para el contador
  const fadeAnim = new Animated.Value(0);

  // useEffect para mostrar un mensaje en la consola cada vez que el contador cambie
  useEffect(() => {
    // Mostrar el cambio del contador en consola
    console.log(`El contador ha cambiado a: ${contador}`);

    // Ejecutar una animación cuando el contador cambia
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Resetear la animación después de 500ms para un efecto de fade en el siguiente cambio
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 500);
  }, [contador]);

  return (
    <View style={styles.container}>
      {/* Texto que muestra el valor del contador */}
      <Text style={styles.texto}>Contador: {contador}</Text>

      {/* Botón para incrementar el contador */}
      <Button
        title="Presione"
        onPress={() => setContador(contador + 1)}
      />

      {/* Mostrar mensaje si el contador es múltiplo de 5 */}
      {contador % 5 === 0 && contador !== 0 && (
        <Animated.Text
          style={[styles.mensaje, { opacity: fadeAnim }]} // Aplicar animación de fade
        >
          ¡Ha alcanzado un múltiplo de 5!
        </Animated.Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // Contenedor principal para centrar el contenido
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0", // Fondo claro
  },
  // Estilo del texto que muestra el contador
  texto: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333", // Color oscuro para el texto
  },
  // Estilo del mensaje cuando se alcanza un múltiplo de 5
  mensaje: {
    marginTop: 20,
    fontSize: 18,
    color: "green", // Color verde para el mensaje
    fontWeight: "600", // Texto en negrita
  },
});