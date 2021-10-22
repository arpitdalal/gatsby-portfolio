var recaptchaLoadedinput_12 = function () {
  window.grecaptcha.render($("recaptcha_input_12"), {
    sitekey: "6LdU3CgUAAAAAB0nnFM3M3T0sy707slYYU51RroJ",
  })
  var grecaptchaBadge = document.querySelector(".grecaptcha-badge")
  if (grecaptchaBadge) {
    grecaptchaBadge.style.boxShadow = "gray 0px 0px 2px"
  }
}

/**
 * Called when the reCaptcha verifies the user is human
 * For invisible reCaptcha;
 *   Submit event is stopped after validations and recaptcha is executed.
 *   If a challenge is not displayed, this will be called right after grecaptcha.execute()
 *   If a challenge is displayed, this will be called when the challenge is solved successfully
 *   Submit is triggered to actually submit the form since it is stopped before.
 */
var recaptchaCallbackinput_12 = function () {
  var isInvisibleReCaptcha = false
  var hiddenInput = $("input_12")
  hiddenInput.setValue(1)
  if (!isInvisibleReCaptcha) {
    if (hiddenInput.validateInput) {
      hiddenInput.validateInput()
    }
  } else {
    triggerSubmit(hiddenInput.form)
  }

  function triggerSubmit(formElement) {
    var button = formElement.ownerDocument.createElement("input")
    button.style.display = "none"
    button.type = "submit"
    formElement.appendChild(button).click()
    formElement.removeChild(button)
  }
}

// not really required for invisible recaptcha
var recaptchaExpiredCallbackinput_12 = function () {
  var hiddenInput = $("input_12")
  hiddenInput.writeAttribute("value", false)
  if (hiddenInput.validateInput) {
    hiddenInput.validateInput()
  }
}

JotForm.newDefaultTheme = false
JotForm.extendsNewTheme = false
JotForm.newPaymentUIForNewCreatedForms = false
JotForm.clearFieldOnHide = "disable"

JotForm.init(function () {
  /*INIT-START*/
  if (window.JotForm && JotForm.accessible)
    $("input_8").setAttribute("tabindex", 0)
  JotForm.setPhoneMaskingValidator("input_5_full", "(###) ###-####")
  if (window.JotForm && JotForm.accessible)
    $("input_7").setAttribute("tabindex", 0)
  JotForm.alterTexts(undefined)
  /*INIT-END*/
})

JotForm.prepareCalculationsOnTheFly([
  null,
  { name: "heading", qid: "1", text: "Form", type: "control_head" },
  { name: "send", qid: "2", text: "Send", type: "control_button" },
  null,
  {
    description: "",
    name: "email",
    qid: "4",
    subLabel: "",
    text: "Email",
    type: "control_email",
  },
  {
    description: "",
    name: "phoneNumber",
    qid: "5",
    text: "Phone Number",
    type: "control_phone",
  },
  null,
  {
    description: "",
    name: "typeA",
    qid: "7",
    subLabel: "",
    text: "Message",
    type: "control_textarea",
  },
  {
    description: "",
    name: "name",
    qid: "8",
    subLabel: "",
    text: "Name",
    type: "control_textbox",
  },
  null,
  null,
  null,
  {
    description: "",
    name: "pleaseVerify",
    qid: "12",
    text: "Please verify that you are human",
    type: "control_captcha",
  },
])
setTimeout(function () {
  JotForm.paymentExtrasOnTheFly([
    null,
    { name: "heading", qid: "1", text: "Form", type: "control_head" },
    { name: "send", qid: "2", text: "Send", type: "control_button" },
    null,
    {
      description: "",
      name: "email",
      qid: "4",
      subLabel: "",
      text: "Email",
      type: "control_email",
    },
    {
      description: "",
      name: "phoneNumber",
      qid: "5",
      text: "Phone Number",
      type: "control_phone",
    },
    null,
    {
      description: "",
      name: "typeA",
      qid: "7",
      subLabel: "",
      text: "Message",
      type: "control_textarea",
    },
    {
      description: "",
      name: "name",
      qid: "8",
      subLabel: "",
      text: "Name",
      type: "control_textbox",
    },
    null,
    null,
    null,
    {
      description: "",
      name: "pleaseVerify",
      qid: "12",
      text: "Please verify that you are human",
      type: "control_captcha",
    },
  ])
}, 20)
