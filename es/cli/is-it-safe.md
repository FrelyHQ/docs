---
title: ¿Es seguro dejar que una IA use mi computadora?
description: Cómo se limitan el acceso, el sandbox y las credenciales en tu computadora.
applies_to: any
updated: 2026-11-02
site: cli
category: Security and limits
order: 17
---

# ¿Es seguro dejar que una IA use mi computadora?

El acceso se limita a las carpetas que compartes. Las herramientas de archivos rechazan los escapes mediante enlaces simbólicos y limitan las lecturas y escrituras a 1 MiB. Los comandos se ejecutan como tu usuario del sistema operativo dentro de un sandbox del sistema operativo: las carpetas de credenciales no se pueden leer, las escrituras se limitan al espacio de trabajo y al directorio temporal, y la red pasa por un proxy. Si la computadora no puede aplicar un sandbox, los comandos se rechazan en lugar de ejecutarse sin sandbox. La URL de MCP no contiene ningún secreto, y la CLI mantiene su clave de ejecución cifrada en el almacén de credenciales del sistema operativo. Puedes revocar el acceso en cualquier momento con `frely link off`; esto revoca todos los clientes y bloquea el control remoto en esa computadora hasta que ejecutes `frely link on` allí.

Related: [Cómo el sandbox protege tus datos](https://frely.cloud/connect/sandbox/) · [Límites de credenciales e instalación](https://github.com/FrelyHQ/frely-cli/blob/main/docs/credential-storage.md) · [Política de seguridad](https://github.com/FrelyHQ/frely-cli/blob/main/SECURITY.md) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
