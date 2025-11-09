// services/whatsappService.ts

interface WhatsAppResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Servicio para enviar mensajes con imagen por WhatsApp API
 */
export class WhatsAppService {
  private static readonly API_URL = 'https://whatsapi.tamimaquinarias.com/api/send-image';
  private static readonly DEFAULT_IMAGE = '/flyer-dark.png';

  /**
   * Convierte una imagen a base64 con el formato requerido
   */
  private static async imageToBase64(imageUrl: string): Promise<string> {
    try {
      const response = await fetch(imageUrl);
      
      if (!response.ok) {
        throw new Error(`Error al cargar la imagen: ${response.status}`);
      }

      const mimeType = response.headers.get('Content-Type') || 'image/png';
      const arrayBuffer = await response.arrayBuffer();
      const base64 = btoa(
        new Uint8Array(arrayBuffer).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );

      return `data:${mimeType};base64,${base64}`;
    } catch (error) {
      console.error('Error converting image to base64:', error);
      throw new Error('No se pudo procesar la imagen');
    }
  }

  /**
   * Formatea el número de teléfono al formato requerido
   */
  private static formatPhoneNumber(phone: string): string {
    // Limpiar el número (remover espacios, guiones, etc.)
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Si ya tiene el código de país, retornar tal cual
    if (cleanPhone.startsWith('51')) {
      return `+${cleanPhone}`;
    }
    
    // Si empieza con 9 (número peruano), agregar +51
    if (cleanPhone.startsWith('9') && cleanPhone.length === 9) {
      return `+51${cleanPhone}`;
    }
    
    // Si es un número de 9 dígitos sin código, agregar +51
    if (cleanPhone.length === 9) {
      return `+51${cleanPhone}`;
    }
    
    // Si no cumple ningún formato, retornar tal cual (el backend deberá validar)
    return `+${cleanPhone}`;
  }

  /**
   * Envía un mensaje con imagen por WhatsApp
   */
  static async sendImageMessage(phone: string, caption: string = ''): Promise<WhatsAppResponse> {
    try {
      // Validar número de teléfono
      if (!phone || phone.trim().length === 0) {
        return {
          success: false,
          error: 'El número de teléfono es requerido'
        };
      }

      // Formatear número de teléfono
      const formattedPhone = this.formatPhoneNumber(phone);
      
      // Convertir imagen a base64
      const imageData = await this.imageToBase64(this.DEFAULT_IMAGE);

      // Preparar el mensaje por defecto si no se proporciona uno
      const defaultCaption = `¡Hola! Gracias por tu interés en NaviFest 🎄\n\nTe comparto información sobre nuestro evento benéfico. ¿En qué más puedo ayudarte?`;
      const finalCaption = caption || defaultCaption;

      // Enviar a la API
      const response = await fetch(this.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          caption: finalCaption,
          phone: formattedPhone,
          imageData: imageData
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Error en la API: ${response.status} - ${errorData}`);
      }

      const data = await response.json();

      return {
        success: true,
        message: 'Mensaje enviado correctamente'
      };

    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Error desconocido al enviar el mensaje'
      };
    }
  }

  /**
   * Envía un mensaje específico para nuevos contactos del formulario
   */
  static async sendWelcomeMessage(phone: string, userName: string = ''): Promise<WhatsAppResponse> {
    const personalizedCaption = userName 
      ? `¡Hola ${userName.toUpperCase()}! 🎄\n\nGracias por contactarnos desde el formulario de NaviFest. Te comparto información sobre nuestro evento benéfico. Estamos aquí para resolver todas tus dudas. ¡Juntos haremos una Navidad más feliz! 🎁\n\n¿En qué más puedo ayudarte?`
      : `¡Hola! 🎄\n\nGracias por contactarnos desde el formulario de NaviFest. Te comparto información sobre nuestro evento benéfico. Estamos aquí para resolver todas tus dudas. ¡Juntos haremos una Navidad más feliz! 🎁\n\n¿En qué más puedo ayudarte?`;

    return this.sendImageMessage(phone, personalizedCaption);
  }
}