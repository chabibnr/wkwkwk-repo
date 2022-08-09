!(function () {
  "use strict";

  function i(i, t) {
    i.ui.registry.addIcon(
      "file-handler-image-icon",
      '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/></svg>'
    ),
      i.ui.registry.addButton("file-handler-image", {
        icon: "file-handler-image-icon",
        tooltip: "Gambar",
        onAction: function () {
          console.log(t),
            tinymce.activeEditor.settings.open_file_picker &&
              tinymce.activeEditor.settings.open_file_picker("image", i);
        },
      }),
      i.ui.registry.addIcon(
        "file-handler-audio-icon",
        '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"/></svg>'
      ),
      i.ui.registry.addButton("file-handler-audio", {
        icon: "file-handler-audio-icon",
        tooltip: "Audio",
        onAction: function () {
          tinymce.activeEditor.settings.open_file_picker &&
            tinymce.activeEditor.settings.open_file_picker("audio", i);
        },
      }),
      i.ui.registry.addIcon(
        "file-handler-video-icon",
        '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z"/></svg>'
      ),
      i.ui.registry.addButton("file-handler-video", {
        icon: "file-handler-video-icon",
        tooltip: "Video",
        onAction: function () {
          tinymce.activeEditor.settings.open_file_picker &&
            tinymce.activeEditor.settings.open_file_picker("video", i);
        },
      }),
      i.ui.registry.addIcon(
        "file-handler-doc-icon",
        '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg>'
      ),
      i.ui.registry.addButton("file-handler-doc", {
        icon: "file-handler-doc-icon",
        tooltip: "Document",
        onAction: function () {
          tinymce.activeEditor.settings.open_file_picker &&
            tinymce.activeEditor.settings.open_file_picker("doc", i);
        },
      }),
      i.ui.registry.addIcon(
        "file-handler-attachment-icon",
        '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"/></svg>'
      ),
      i.ui.registry.addButton("file-handler-attachment", {
        icon: "file-handler-attachment-icon",
        tooltip: "Attachment",
        onAction: function () {
          tinymce.activeEditor.settings.open_file_picker &&
            tinymce.activeEditor.settings.open_file_picker("attachment", i);
        },
      }),
      i.ui.registry.addIcon(
        "file-handler-youtube-icon",
        '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="24px" height="24px"><path fill="#f78f8f" d="M27.844,21.117c-0.278,1.4-1.461,2.467-2.922,2.667c-2.296,0.333-5.546,0.717-9.86,0.717 c-4.244,0-7.65-0.383-10.015-0.717c-1.461-0.2-2.644-1.267-2.922-2.667c-0.278-1.533-0.604-3.3-0.604-6.1S1.752,10.533,2.031,9 c0.278-1.4,1.461-2.467,2.922-2.667C7.249,6,10.654,5.583,14.968,5.583s7.494,0.417,9.86,0.75C26.289,6.533,27.472,7.6,27.75,9 c0.278,1.533,0.673,3.217,0.673,6.017C28.354,17.817,28.123,19.583,27.844,21.117z"/><path fill="#c74343" d="M15.015,6c4.267,0,7.954,0.393,10.301,0.724c1.048,0.143,1.883,0.895,2.074,1.854 c0.262,1.443,0.61,3.679,0.61,6.397c-0.077,3.108-0.416,5.373-0.607,6.43c-0.194,0.976-1.029,1.727-2.085,1.872 C23.811,23.494,19.811,24,15.015,24c-4.492,0-8.379-0.453-10.301-0.724c-1.048-0.143-1.883-0.895-2.074-1.854 C2.394,20.063,2.1,17.846,2.1,15s0.294-5.063,0.537-6.405c0.194-0.976,1.029-1.727,2.085-1.872C6.22,6.506,10.22,6,15.015,6 M15.015,5c-4.314,0-8.14,0.4-10.436,0.733C3.118,5.933,1.935,7,1.657,8.4C1.378,9.933,1.1,12.2,1.1,15s0.278,5.067,0.557,6.6 c0.278,1.4,1.461,2.467,2.922,2.667C6.944,24.6,10.771,25,15.015,25c4.314,0,8.14-0.4,10.436-0.733 c1.461-0.2,2.644-1.267,2.922-2.667C28.652,20.067,28.93,17.8,29,15c0-2.8-0.348-5.067-0.626-6.6 c-0.278-1.4-1.461-2.467-2.922-2.667C23.086,5.4,19.329,5,15.015,5L15.015,5z"/><path fill="#fff" d="M13 19L13 11 20 15z"/></svg>'
      ),
      i.ui.registry.addButton("file-handler-youtube", {
        icon: "file-handler-youtube-icon",
        tooltip: "Youtube Video",
        onAction: function () {
          tinymce.activeEditor.settings.open_file_picker &&
            tinymce.activeEditor.settings.open_file_picker("youtube", i);
        },
      });
  }

  tinymce.PluginManager.add("file-handler", i);
})();
