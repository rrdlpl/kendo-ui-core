(function ($, undefined) {
/* Filter cell operator messages */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.operators =
$.extend(true, kendo.ui.FilterCell.prototype.options.operators,{
  "date": {
    "eq": "Es igual a",
    "gte": "Es posterior o igual a",
    "gt": "Es posterior",
    "lte": "Es anterior o igual a",
    "lt": "Es anterior",
    "neq": "No es igual a"
  },
  "number": {
    "eq": "Es igual a",
    "gte": "Es mayor o igual que",
    "gt": "Es mayor que",
    "lte": "Es menor o igual que",
    "lt": "Es menor que",
    "neq": "No es igual a"
  },
  "string": {
    "endswith": "Termina en",
    "eq": "Es igual a",
    "neq": "No es igual a",
    "startswith": "Comienza con",
    "contains": "Contiene",
    "doesnotcontain": "No contiene"
  },
  "enums": {
    "eq": "Es igual a",
    "neq": "No es igual a"
  }
});
}

/* Filter menu operator messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.operators =
$.extend(true, kendo.ui.FilterMenu.prototype.options.operators,{
  "date": {
    "eq": "Es igual a",
    "gte": "Es posterior o igual a",
    "gt": "Es posterior",
    "lte": "Es anterior o igual a",
    "lt": "Es anterior",
    "neq": "No es igual a"
  },
  "number": {
    "eq": "Es igual a",
    "gte": "Es mayor o igual que",
    "gt": "Es mayor que",
    "lte": "Es menor o igual que",
    "lt": "Es menor que",
    "neq": "No es igual a"
  },
  "string": {
    "endswith": "Termina en",
    "eq": "Es igual a",
    "neq": "No es igual a",
    "startswith": "Comienza con",
    "contains": "Contiene",
    "doesnotcontain": "No contiene"
  },
  "enums": {
    "eq": "Es igual a",
    "neq": "No es igual a"
  }
});
}

/* ColumnMenu messages */

if (kendo.ui.ColumnMenu) {
kendo.ui.ColumnMenu.prototype.options.messages =
$.extend(true, kendo.ui.ColumnMenu.prototype.options.messages,{
  "columns": "Columnas",
  "sortAscending": "Orden ascendente",
  "sortDescending": "Orden descendente",
  "settings": "Configuración de columnas",
  "done": "Hecho",
  "lock": "Bloquear",
  "unlock": "Desbloquear"
});
}

/* RecurrenceEditor messages */

if (kendo.ui.RecurrenceEditor) {
kendo.ui.RecurrenceEditor.prototype.options.messages =
$.extend(true, kendo.ui.RecurrenceEditor.prototype.options.messages,{
  "daily": {
    "interval": "día(s)",
    "repeatEvery": "Repetir cada:"
  },
  "end": {
    "after": "Después",
    "occurrence": "ocurrencia(s)",
    "label": "Fin:",
    "never": "Nunca",
    "on": "En",
    "mobileLabel": "Ends"
  },
  "frequencies": {
    "daily": "Diariamente",
    "monthly": "Mensualmente",
    "never": "Nunca",
    "weekly": "Semanalmente",
    "yearly": "Anualmente"
  },
  "monthly": {
    "day": "Día",
    "interval": "mes(es)",
    "repeatEvery": "Repetir cada:",
    "repeatOn": "Repetir en:"
  },
  "offsetPositions": {
    "first": "Primero",
    "fourth": "Cuarto",
    "last": "Último",
    "second": "Segundo",
    "third": "Tercero"
  },
  "weekly": {
    "repeatEvery": "Repetir cada:",
    "repeatOn": "Repetir en:",
    "interval": "semana(s)"
  },
  "yearly": {
    "of": "de",
    "repeatEvery": "Repetir cada:",
    "repeatOn": "Repetir en:",
    "interval": "año(s)"
  },
  "weekdays": {
    "day": "día",
    "weekday": "día de semana",
    "weekend": "día de fin de semana"
  }
});
}

/* Grid messages */

if (kendo.ui.Grid) {
kendo.ui.Grid.prototype.options.messages =
$.extend(true, kendo.ui.Grid.prototype.options.messages,{
  "commands": {
    "create": "Agregar",
    "destroy": "Eliminar",
    "canceledit": "Cancelar",
    "update": "Actualizar",
    "edit": "Editar",
    "excel": "Exportar a Excel",
    "pdf": "Exportar a PDF",
    "select": "Seleccionar",
    "cancel": "Cancelar Cambios",
    "save": "Guardar Cambios"
  },
  "editable": {
    "confirmation": "¿Confirma la eliminación de este registro?",
    "cancelDelete": "Cancelar",
    "confirmDelete": "Eliminar"
  }
});
}

/* Pager messages */

if (kendo.ui.Pager) {
kendo.ui.Pager.prototype.options.messages =
$.extend(true, kendo.ui.Pager.prototype.options.messages,{
  "page": "Página",
  "display": "Elementos mostrados  {0} - {1} de {2}",
  "of": "de {0}",
  "empty": "No hay registros.",
  "refresh": "Actualizar",
  "first": "Ir a la primera página",
  "itemsPerPage": "ítems por página",
  "last": "Ir a la última página",
  "next": "Ir a la página siguiente",
  "previous": "Ir a la página anterior",
  "morePages": "Más paginas"
});
}

/* FilterCell messages */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.messages =
$.extend(true, kendo.ui.FilterCell.prototype.options.messages,{
  "filter": "Filtrar",
  "clear": "Limpiar filtro",
  "isFalse": "No",
  "isTrue": "Sí",
  "operator": "Operador"
});
}

/* FilterMenu messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.messages =
$.extend(true, kendo.ui.FilterMenu.prototype.options.messages,{
  "filter": "Filtrar",
  "and": "Y",
  "clear": "Limpiar filtro",
  "info": "Mostrar filas con valor que",
  "isFalse": "No",
  "isTrue": "Si",
  "or": "Or",
  "cancel": "Cancelar",
  "operator": "Operador",
  "value": "Valor",
  "selectValue": "-Seleccionar valor-"
});
}

/* Groupable messages */

if (kendo.ui.Groupable) {
kendo.ui.Groupable.prototype.options.messages =
$.extend(true, kendo.ui.Groupable.prototype.options.messages,{
  "empty": "Arrastre un encabezado de columna y suéltelo aquí para agrupar por dicho criterio"
});
}

/* Editor messages */

if (kendo.ui.Editor) {
kendo.ui.Editor.prototype.options.messages =
$.extend(true, kendo.ui.Editor.prototype.options.messages,{
  "dialogButtonSeparator": "o",
  "dialogCancel": "Cancelar",
  "dialogInsert": "Insertar",
  "imageAltText": "Alternate text",
  "imageWebAddress": "Web address",
  "linkOpenInNewWindow": "Abrir enlace en una nueva ventana",
  "linkText": "Texto",
  "linkToolTip": "ToolTip",
  "linkWebAddress": "Web address",
  "search": "Buscar",
  "createTable": "Crear una tabla",
  "addColumnLeft": "Agregar columna a la izquierdat",
  "addColumnRight": "Agregar columna a la derecha",
  "addRowAbove": "Agregar fila encima",
  "addRowBelow": "Agregar fila abajo",
  "deleteColumn": "Borrar columna",
  "deleteRow": "Borrar fila",
  "backColor": "Color de fondo",
  "bold": "Negrita",
  "createLink": "Insertar hipervínculo",
  "deleteFile": "¿Está seguro de eliminar \"{0}\"?",
  "directoryNotFound": "Un directorio con este nombre no fue encontrado.",
  "dropFilesHere": "Arrastre los archivos aquí para subirlos",
  "emptyFolder": "Vaciar carpeta",
  "fontName": "Seleccionar fuente",
  "fontNameInherit": "(fuente heredada)",
  "fontSize": "Seleccionar tamaño de la fuente",
  "fontSizeInherit": "(tamaño heredado)",
  "foreColor": "Color",
  "formatBlock": "Formatear",
  "indent": "Identar",
  "insertHtml": "Insertar HTML",
  "insertImage": "Insertar imágen",
  "insertOrderedList": "Insertar lista ordenada",
  "insertUnorderedList": "Insertar lista desornada",
  "invalidFileType": "El archivo seleccionado \"{0}\" no es válido. Los formatos soportados son {1}.",
  "italic": "Cursiva",
  "justifyCenter": "Centrar texto",
  "justifyFull": "Justificar",
  "justifyLeft": "Alinear texto a la izquierda",
  "justifyRight": "Alinear texto a la derecha",
  "linkOpenInNewWindow1": "Abrir enlance en una nueva ventana",
  "linkText1": "Text",
  "linkToolTip1": "ToolTip",
  "linkWebAddress1": "Web address",
  "orderBy": "Ordenar por:",
  "orderByName": "Nombre",
  "orderBySize": "Tamaño",
  "outdent": "Outdent",
  "overwriteFile": "'Un archivo con el nombre \"{0}\" ya existe en el directorio actual. Desea sobreescribirlo?",
  "search1": "Buscar",
  "strikethrough": "Strikethrough",
  "styles": "Estilos",
  "subscript": "Subscript",
  "superscript": "Superscript",
  "underline": "Subrayar",
  "unlink": "Remover hipervínculo",
  "uploadFile": "Subir archivo",
  "formatting": "Formatear",
  "viewHtml": "Ver HTML",
  "dialogUpdate": "Actualizar",
  "insertFile": "Insertar archivo"
});
}

/* Scheduler messages */

if (kendo.ui.Scheduler) {
kendo.ui.Scheduler.prototype.options.messages =
$.extend(true, kendo.ui.Scheduler.prototype.options.messages,{
  "allDay": "todo el día",
  "cancel": "Cancelar",
  "editable": {
    "confirmation": "¿Está seguro que quiere eliminar este evento?"
  },
  "date": "Fecha",
  "destroy": "Eliminar",
  "editor": {
    "allDayEvent": "Todo el día",
    "description": "Descripción",
    "editorTitle": "Evento",
    "end": "Fin",
    "endTimezone": "Zona horaria de fin",
    "repeat": "Repetir",
    "separateTimezones": "Usar zonas horarias separadas para el inicio y el fin",
    "start": "Inicio",
    "startTimezone": "Zona horaria de inicio",
    "timezone": " ",
    "timezoneEditorButton": "Zona horaria",
    "timezoneEditorTitle": "Zonas horarias",
    "title": "Título",
    "noTimezone": "Sin zona horaria"
  },
  "event": "Evento",
  "recurrenceMessages": {
    "deleteRecurring": "¿Quiere eliminar esta ocurrencia del evento o la serie completa?",
    "deleteWindowOccurrence": "Eliminar ocurrencia actual",
    "deleteWindowSeries": "Eliminar la serie",
    "deleteWindowTitle": "Eliminar elemento recurrente",
    "editRecurring": "¿Quiere editar esta ocurrencia del evento o la serie completa?",
    "editWindowOccurrence": "Editar ocurrencia actual",
    "editWindowSeries": "Editar la serie",
    "editWindowTitle": "Editar elemento recurrente"
  },
  "save": "Guardar",
  "time": "Hora",
  "today": "Hoy",
  "views": {
    "agenda": "Agenda",
    "day": "Día",
    "month": "Mes",
    "week": "Semana",
    "workWeek": "Semana laboral"
  },
  "deleteWindowTitle": "Eliminar evento",
  "showFullDay": "Mostrar día completo",
  "showWorkDay": "Mostrar horas laborables"
});
}

/* Upload messages */

if (kendo.ui.Upload) {
kendo.ui.Upload.prototype.options.localization =
$.extend(true, kendo.ui.Upload.prototype.options.localization,{
  "cancel": "Cancelar",
  "dropFilesHere": "Arrastre los archivos aquí para subirlos",
  "headerStatusUploaded": "Completado",
  "headerStatusUploading": "Subiendo...",
  "remove": "Quitar",
  "retry": "Reintentar",
  "select": "Seleccione...",
  "statusFailed": "Error",
  "statusUploaded": "Completado",
  "statusUploading": "subiendo",
  "uploadSelectedFiles": "Subir archivos"
});
}
})(window.kendo.jQuery);
