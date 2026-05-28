export default {
  title: 'Política de privacidad',
  updated: 'Última actualización: 29 de mayo de 2026',
  intro:
    'La presente Política de privacidad describe cómo Shadow Economy («nosotros» o «nuestro») recopila, utiliza, almacena y protege la información personal cuando usted utiliza la aplicación móvil Shadow Economy, nuestro sitio web en shadoweconomyapp.com y los servicios relacionados (en conjunto, el «Servicio»). Shadow Economy es un juego educativo de audiencia general operado por un desarrollador individual. Solo tratamos los datos necesarios para operar el Servicio y generar informes educativos para el titular de la cuenta. No vendemos información personal. No accedemos al contenido en texto claro de informes personalizados individuales con fines de marketing u otros fines no relacionados.',
  sections: [
    {
      title: '1. Responsable del tratamiento y ámbito',
      blocks: [
        {
          type: 'p',
          text: 'Shadow Economy es desarrollado y operado de forma independiente por un único desarrollador individual con base en Nueva Zelanda (sin entidad corporativa). A efectos de las leyes de privacidad aplicables, dicha persona es el responsable del tratamiento del Servicio. El Servicio se ofrece a usuarios de todo el mundo.',
        },
        { type: 'p', text: 'Contacto: contact@shadoweconomyapp.com' },
        {
          type: 'p',
          text: 'Esta Política se aplica a la aplicación Shadow Economy (iOS y Android), nuestro sitio web y los canales de atención al cliente que hagan referencia a esta Política.',
        },
      ],
    },
    {
      title: '2. Privacidad en resumen',
      blocks: [
        {
          type: 'p',
          text: 'Este resumen se ofrece por conveniencia. Si difiere del resto de esta Política, prevalece la Política completa.',
        },
        {
          type: 'ul',
          items: [
            'Responsable: desarrollador individual con base en Nueva Zelanda — contact@shadoweconomyapp.com',
            'Qué recopilamos: identificadores de cuenta (correo electrónico; nombre para mostrar de Google cuando se usa), datos de juego y partidas guardadas, saldo de créditos de informe, metadatos de compras en la tienda de aplicaciones y registros técnicos limitados (dirección IP, agente de usuario, marcas de tiempo)',
            'Por qué lo tratamos: operar el Servicio, sincronizar el progreso, cumplir compras, generar informes educativos, mantener la seguridad y cumplir la ley',
            'Venta / publicidad en contexto cruzado: no vendemos información personal ni la compartimos para publicidad conductual en contexto cruzado',
            'SDK de análisis / publicidad: no utilizamos SDK de publicidad o análisis de terceros en la aplicación ni en el sitio web',
            'Quién recibe los datos: Supabase, Vercel, Apple y Google según se describe en la sección 7',
            'Tratamiento internacional: los datos pueden almacenarse o tratarse en Singapur, Estados Unidos y otros países donde operen nuestros proveedores',
            'Conservación: mientras su cuenta esté activa; por lo general se eliminan o anonimizan en un plazo de 30 días tras la eliminación de la cuenta, salvo excepciones legales',
            'Sus derechos: dependen de su ubicación — véase la sección 13; contáctenos para ejercerlos',
          ],
        },
      ],
    },
    {
      title: '3. Información que recopilamos',
      blocks: [
        { type: 'h3', text: 'Información que usted proporciona' },
        {
          type: 'ul',
          items: [
            'Dirección de correo electrónico — al crear una cuenta o iniciar sesión',
            'Nombre para mostrar — al iniciar sesión con Google (solo recibimos lo que usted autoriza a compartir con Google)',
          ],
        },
        { type: 'h3', text: 'Información generada por el uso del Servicio' },
        {
          type: 'ul',
          items: [
            'Datos del estado del juego — progreso, activos, pasivos, historial de turnos, decisiones en el juego y registros relacionados',
            'Saldo de créditos de informe — créditos asociados a su cuenta',
            'Preferencia de idioma — almacenada en su dispositivo y, cuando ha iniciado sesión, utilizada para presentar el Servicio en el idioma elegido',
            'Registros de compra — identificadores de transacciones de compras dentro de la aplicación, tipo de producto, créditos concedidos y marcas de tiempo (de Apple App Store o Google Play). Los datos de tarjeta y facturación los procesa exclusivamente la tienda correspondiente y no se comparten con nosotros',
          ],
        },
        { type: 'h3', text: 'Información recopilada automáticamente' },
        {
          type: 'ul',
          items: [
            'Dirección IP, marcas de tiempo, método HTTP, códigos de respuesta y cadena de agente de usuario — recopilados por nuestros proveedores de alojamiento y backend como parte de la operación y seguridad estándar',
            'Datos de sesión de autenticación — gestionados mediante Supabase; no almacenamos sus contraseñas de inicio de sesión de terceros',
          ],
        },
        { type: 'h3', text: 'Información que no recopilamos' },
        {
          type: 'ul',
          items: [
            'Geolocalización precisa',
            'Cámara, micrófono, contactos o biblioteca de fotos (salvo lo exigido por el sistema operativo en los flujos de inicio de sesión que usted inicie)',
            'Identificadores publicitarios (IDFA / GAID) para publicidad entre aplicaciones',
            'Perfiles de publicidad conductual o seguimiento entre sitios con fines publicitarios',
            'SDK de publicidad de terceros',
          ],
        },
      ],
    },
    {
      title: '4. Bases jurídicas del tratamiento (EEE / Reino Unido)',
      blocks: [
        {
          type: 'p',
          text: 'Si se encuentra en el Espacio Económico Europeo o el Reino Unido, tratamos los datos personales con las siguientes bases:',
        },
        {
          type: 'ul',
          items: [
            'Ejecución de un contrato (art. 6(1)(b) RGPD) — creación de cuenta, autenticación, sincronización de partidas en la nube, cumplimiento de compras y entrega de informes',
            'Intereses legítimos (art. 6(1)(f) RGPD) — seguridad, prevención del fraude, fiabilidad y mejora del servicio, cuando no prevalezcan sus derechos',
            'Obligación legal (art. 6(1)(c) RGPD) — cuando lo exija la legislación aplicable',
          ],
        },
        {
          type: 'p',
          text: 'No nos basamos únicamente en el consentimiento como base jurídica para el funcionamiento esencial del Servicio. Si introducimos tratamientos basados en el consentimiento en el futuro, se lo notificaremos y ofreceremos un mecanismo de retirada que no afecte a la licitud del tratamiento anterior.',
        },
      ],
    },
    {
      title: '5. Cómo utilizamos la información',
      blocks: [
        {
          type: 'ul',
          items: [
            'Prestar, mantener y mejorar el Servicio',
            'Crear y gestionar cuentas y autenticar usuarios',
            'Sincronizar el progreso del juego entre dispositivos cuando ha iniciado sesión',
            'Procesar compras dentro de la aplicación y conceder créditos de informe',
            'Generar informes educativos personalizados para el titular de la cuenta',
            'Enviar comunicaciones transaccionales (p. ej., avisos de inicio de sesión o de cuenta). No enviamos correos de marketing',
            'Proteger la seguridad e integridad del Servicio',
            'Cumplir obligaciones legales y responder a solicitudes legítimas',
          ],
        },
        {
          type: 'p',
          text: 'No vendemos, alquilamos ni comercializamos su información personal. No utilizamos sus datos para publicidad de terceros.',
        },
      ],
    },
    {
      title: '6. Tratamiento automatizado e informes personalizados',
      blocks: [
        {
          type: 'p',
          text: 'Cuando desbloquea un informe, el Servicio genera texto educativo personalizado a partir de sus datos de juego completados mediante lógica basada en reglas implementada en nuestro software. Se trata de un tratamiento automatizado de sus datos de estado del juego para producir el informe de su cuenta.',
        },
        {
          type: 'p',
          text: 'No utilizamos sus datos para tomar decisiones que produzcan efectos jurídicos o similares significativos sobre usted. No utilizamos servicios de IA generativa de terceros para redactar el contenido de los informes, ni creamos perfiles publicitarios a partir de su juego o informes.',
        },
        {
          type: 'p',
          text: 'Los informes desbloqueados que elija guardar pueden almacenarse en el archivo de su cuenta en nuestros servidores para que pueda acceder a ellos entre dispositivos. No utilizamos el contenido sustantivo de los informes guardados con fines de marketing u otros fines no relacionados.',
        },
      ],
    },
    {
      title: '7. Cesión y encargados del tratamiento',
      blocks: [
        {
          type: 'p',
          text: 'Compartimos información personal solo con proveedores que nos ayudan a operar el Servicio, y únicamente en la medida necesaria:',
        },
        {
          type: 'ul',
          items: [
            'Supabase, Inc. (Estados Unidos) — autenticación, base de datos y almacenamiento en la nube. Región principal: Asia-Pacífico (Singapur). Política de privacidad: supabase.com/privacy',
            'Vercel Inc. (Estados Unidos) — alojamiento del sitio web y entrega de contenido de shadoweconomyapp.com. Política de privacidad: vercel.com/legal/privacy-policy',
            'Apple Inc. — compras dentro de la aplicación en App Store (iOS). El pago lo procesa Apple. Política de privacidad: apple.com/legal/privacy',
            'Google LLC — inicio de sesión con Google (cuando esté disponible) y compras en Google Play (Android). El pago de las compras lo procesa Google. Política de privacidad: policies.google.com/privacy',
          ],
        },
        {
          type: 'p',
          text: 'Cuando utiliza el inicio de sesión con Google o compra a través de Apple o Google, esas empresas pueden recopilar y tratar información conforme a sus propias políticas de privacidad. Para esas actividades actúan como responsables independientes (o equivalente) de sus servicios, no como encargados que tratan datos según nuestras instrucciones.',
        },
        {
          type: 'p',
          text: 'Podemos divulgar información si la ley, la normativa, un procedimiento legal o una solicitud gubernamental lo exigen, o cuando consideremos que la divulgación es necesaria para proteger los derechos, la seguridad o los bienes de los usuarios, del público o de Shadow Economy.',
        },
        {
          type: 'p',
          text: 'Si la operación del Servicio se transfiere a un tercero, se lo notificaremos con antelación y le daremos la oportunidad de eliminar su cuenta antes de que la transferencia surta efecto, salvo que la ley exija un plazo más breve.',
        },
      ],
    },
    {
      title: '8. Transferencias internacionales de datos',
      blocks: [
        {
          type: 'p',
          text: 'Sus datos pueden almacenarse en Singapur (Supabase) y tratarse en Estados Unidos y otros países donde operen nuestros proveedores. Las leyes de esos países pueden diferir de las de su país.',
        },
        {
          type: 'p',
          text: 'Cuando sea necesario para transferencias desde el EEE o el Reino Unido, nos basamos en garantías adecuadas, como las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea, implementadas mediante nuestros acuerdos con los proveedores pertinentes.',
        },
      ],
    },
    {
      title: '9. Conservación de datos',
      blocks: [
        {
          type: 'ul',
          items: [
            'Datos de cuenta y del juego — mientras su cuenta esté activa',
            'Tras la eliminación de la cuenta — eliminamos o anonimizamos los datos personales asociados en un plazo de 30 días, salvo conservación más prolongada exigida por ley, prevención del fraude o resolución de disputas',
            'Registros del servidor (dirección IP, metadatos de solicitudes) — normalmente conservados hasta 90 días según las políticas estándar de nuestros proveedores, y después eliminados o agregados',
            'Almacenamiento local del dispositivo — permanece en su dispositivo hasta que borre los datos de la aplicación/sitio web o desinstale la aplicación',
          ],
        },
      ],
    },
    {
      title: '10. Seguridad',
      blocks: [
        {
          type: 'ul',
          items: [
            'Los datos en tránsito se protegen mediante TLS 1.2 o superior',
            'Los datos en reposo se cifran mediante métodos estándar del sector por nuestros proveedores en la nube (p. ej., AES-256 cuando corresponda)',
            'La autenticación utiliza proveedores de identidad de terceros y sesiones gestionadas por Supabase; no almacenamos sus contraseñas de inicio de sesión social',
            'El acceso a los sistemas de producción se limita al operador individual, además de los encargados indicados',
            'Revisamos periódicamente nuestras prácticas de seguridad',
          ],
        },
        {
          type: 'p',
          text: 'Ningún método de transmisión o almacenamiento es completamente seguro. Si cree que su cuenta ha sido comprometida, contacte de inmediato con contact@shadoweconomyapp.com.',
        },
        {
          type: 'p',
          text: 'Si tenemos conocimiento de una violación de datos personales que probablemente afecte su información y la notificación sea exigida por la ley aplicable, se lo notificaremos sin dilación indebida y de conformidad con dicha ley.',
        },
      ],
    },
    {
      title: '11. Cookies y almacenamiento local',
      blocks: [
        {
          type: 'p',
          text: 'No utilizamos cookies publicitarias ni cookies de seguimiento de terceros en nuestro sitio web.',
        },
        {
          type: 'p',
          text: 'Aplicación móvil: almacenamos el estado del juego y la información de sesión en el almacenamiento local de su dispositivo para conservar el progreso localmente y reducir solicitudes de red innecesarias. No se utiliza para publicidad entre aplicaciones.',
        },
        {
          type: 'p',
          text: 'Sitio web: almacenamos su preferencia de idioma en el almacenamiento local del navegador para que el sitio recuerde su selección. Puede borrarla en la configuración del navegador.',
        },
        {
          type: 'p',
          text: 'Borrar los datos locales de la aplicación puede restablecer el progreso local; los datos sincronizados en la nube se restauran al volver a iniciar sesión con la misma cuenta.',
        },
      ],
    },
    {
      title: '12. Sus opciones y controles',
      blocks: [
        {
          type: 'p',
          text: 'Eliminación de la cuenta: puede eliminar su cuenta en cualquier momento en la aplicación en Ajustes → Cuenta → Eliminar cuenta, o enviando un correo a contact@shadoweconomyapp.com desde la dirección asociada a su cuenta. La eliminación suprime los datos de la cuenta sincronizados en la nube, salvo las excepciones de conservación de la sección 9.',
        },
        {
          type: 'p',
          text: 'Acceso y portabilidad: puede solicitar una copia de los datos personales que conservamos en un formato estructurado, de uso común y legible por máquina cuando sea técnicamente factible, contactándonos.',
        },
        {
          type: 'p',
          text: 'Inicio de sesión con Google: puede revisar y revocar el acceso del Servicio a su cuenta de Google en los permisos de su cuenta de Google en myaccount.google.com.',
        },
        {
          type: 'p',
          text: 'Controles del dispositivo y la tienda: puede borrar los datos locales de la aplicación, desinstalar la aplicación y gestionar el historial de compras dentro de la aplicación en los ajustes de su cuenta de Apple o Google.',
        },
        {
          type: 'p',
          text: 'Marketing: no enviamos correos promocionales. Los mensajes transaccionales relacionados con la seguridad de la cuenta o el Servicio pueden enviarse cuando sea necesario.',
        },
        {
          type: 'p',
          text: 'Control global de privacidad (GPC) y señales similares: cuando la ley lo exija, tratamos las señales de preferencia de exclusión reconocidas como una solicitud de exclusión de la venta o el intercambio para publicidad conductual en contexto cruzado. Como no realizamos esas actividades, dichas señales no cambian nuestras prácticas más allá de confirmar ese estado.',
        },
      ],
    },
    {
      title: '13. Sus derechos de privacidad',
      blocks: [
        {
          type: 'p',
          text: 'Según su ubicación, puede tener derecho de acceso, rectificación, supresión, limitación, portabilidad y oposición a determinados tratamientos. Para ejercerlos, escriba a contact@shadoweconomyapp.com. Responderemos en un plazo de 30 días, salvo que la ley permita un plazo mayor.',
        },
        {
          type: 'p',
          text: 'Podemos pedirle que verifique su identidad (por ejemplo, confirmando el control de la dirección de correo de su cuenta) antes de atender una solicitud, para proteger su información de accesos no autorizados.',
        },
        { type: 'h3', text: 'EEE / Reino Unido (RGPD)' },
        {
          type: 'ul',
          items: [
            'Derecho de acceso, rectificación, supresión, limitación y portabilidad',
            'Derecho de oposición al tratamiento basado en intereses legítimos',
            'Derecho a no ser objeto de decisiones basadas únicamente en tratamiento automatizado con efectos jurídicos o similares (no adoptamos tales decisiones)',
            'Derecho a presentar una reclamación ante su autoridad de control',
          ],
        },
        { type: 'h3', text: 'California (CCPA / CPRA)' },
        {
          type: 'ul',
          items: [
            'Derecho a saber qué información personal se recopila, utiliza y divulga',
            'Derecho a suprimir la información personal, con excepciones',
            'Derecho a optar por no vender ni compartir para publicidad conductual en contexto cruzado — no vendemos información personal ni la compartimos para publicidad conductual en contexto cruzado',
            'Derecho a no sufrir discriminación por ejercer sus derechos de privacidad',
            'No recopilamos información personal sensible según la definición de la CPRA',
            'Un agente autorizado puede presentar solicitudes con autorización por escrito y verificación razonable',
          ],
        },
        { type: 'h3', text: 'Nueva Zelanda' },
        {
          type: 'p',
          text: 'Estamos establecidos en Nueva Zelanda. Cuando se aplica la Privacy Act 2020 de Nueva Zelanda, tratamos la información personal de conformidad con sus requisitos, incluido el acceso y la rectificación cuando corresponda.',
        },
        { type: 'h3', text: 'Otros estados de EE. UU.' },
        {
          type: 'p',
          text: 'Los residentes de estados de EE. UU. con leyes de privacidad integrales (incluidos, cuando corresponda, Colorado, Connecticut, Virginia, Utah, Oregón, Texas y otros) pueden tener derechos de acceso, supresión, rectificación y exclusión de determinados tratamientos. Como no vendemos información personal ni la utilizamos para publicidad dirigida según esas leyes, muchos mecanismos de exclusión no cambian nuestras prácticas, pero puede contactarnos para ejercer los derechos aplicables.',
        },
        { type: 'h3', text: 'Australia' },
        {
          type: 'p',
          text: 'Si se aplica la Privacy Act 1988 de Australia, puede solicitar acceso y rectificación de la información personal que conservamos, y presentar una reclamación ante la Office of the Australian Information Commissioner si no está satisfecho con nuestra respuesta.',
        },
        { type: 'h3', text: 'Canadá' },
        {
          type: 'p',
          text: 'Si se aplica la legislación canadiense de privacidad (incluida la PIPEDA o leyes provinciales sustancialmente equivalentes), puede solicitar acceso y rectificación de la información personal, y impugnar nuestro cumplimiento de los requisitos aplicables.',
        },
        { type: 'h3', text: 'Brasil' },
        {
          type: 'p',
          text: 'Si se aplica la LGPD, puede tener derechos que incluyen confirmación del tratamiento, acceso, rectificación, anonimización, portabilidad, supresión e información sobre el intercambio. Contáctenos para ejercerlos.',
        },
        { type: 'h3', text: 'Otras regiones' },
        {
          type: 'p',
          text: 'Si reside fuera de las regiones indicadas, puede tener derechos adicionales según las leyes de privacidad de su país o región. Contáctenos en contact@shadoweconomyapp.com y responderemos conforme a la ley aplicable.',
        },
        {
          type: 'p',
          text: 'Recursos: si rechazamos su solicitud, explicaremos los motivos cuando la ley lo exija. Puede responder para solicitar una revisión de nuestra decisión. También puede presentar una reclamación ante una autoridad de supervisión o de privacidad en su jurisdicción.',
        },
        {
          type: 'p',
          text: 'Nada en esta Política limita los derechos obligatorios de consumo o privacidad que le correspondan según las leyes de su país de residencia.',
        },
      ],
    },
    {
      title: '14. Privacidad de menores',
      blocks: [
        {
          type: 'p',
          text: 'El Servicio está destinado a una audiencia general. No recopilamos a sabiendas información personal de menores de 13 años (o la edad mínima exigida en su jurisdicción) sin el consentimiento parental adecuado cuando la ley lo requiera. Si cree que un menor ha proporcionado información personal sin consentimiento, contacte con nosotros y tomaremos las medidas de supresión que correspondan.',
        },
      ],
    },
    {
      title: '15. Cambios en esta Política',
      blocks: [
        {
          type: 'p',
          text: 'Podemos actualizar esta Política periódicamente. En caso de cambios sustanciales, proporcionaremos aviso mediante la aplicación, el sitio web o el correo electrónico al menos 14 días antes de la fecha de entrada en vigor, cuando sea razonablemente posible. La fecha de «Última actualización» en la parte superior indica la versión vigente. El uso continuado del Servicio tras la fecha de entrada en vigor constituye la aceptación de la Política actualizada, salvo que la ley exija su consentimiento.',
        },
      ],
    },
    {
      title: '16. Contacto y autoridades de supervisión',
      blocks: [
        { type: 'p', text: 'Consultas de privacidad y ejercicio de derechos: contact@shadoweconomyapp.com' },
        {
          type: 'p',
          text: 'Nuestro objetivo es responder en un plazo de 30 días, salvo que la ley permita un plazo mayor. Si no está satisfecho con nuestra respuesta, puede contactar con una autoridad de supervisión, incluidas:',
        },
        {
          type: 'ul',
          items: [
            'Nueva Zelanda — Office of the Privacy Commissioner: privacy.org.nz',
            'EEE / Reino Unido — su autoridad local de protección de datos (véase edpb.europa.eu/about-edpb/about-edpb/members_en para los miembros de la UE)',
            'Australia — Office of the Australian Information Commissioner: oaic.gov.au',
            'California, EE. UU. — California Privacy Protection Agency: cppa.ca.gov',
          ],
        },
      ],
    },
  ],
}
