import React from "react"
import { Helmet } from "react-helmet"

const Form = () => {
  const [formData, setFormData] = React.useState({
    formID: "202635220764046",
    JWTContainer: "",
    cardinalOrderNumber: "",
    q8_name: "",
    q4_email: "",
    q5_phoneNumber: "",
    website: "",
  })
  const [isHelmet, setIsHelmet] = React.useState(false)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  React.useEffect(() => {
    setIsHelmet(true)
  }, [])

  return (
    <>
      {isHelmet && (
        <Helmet>
          <script
            src="https://cdn02.jotfor.ms/static/prototype.forms.js"
            type="text/javascript"
          ></script>
          <script
            src="https://cdn03.jotfor.ms/static/jotform.forms.js?3.3.28643"
            type="text/javascript"
          ></script>
          <script
            src="https://cdn01.jotfor.ms/js/vendor/jquery-1.8.0.min.js?v=3.3.28643"
            type="text/javascript"
          ></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/punycode/1.4.1/punycode.min.js"></script>
          <script
            src="https://cdn.jotfor.ms/js/vendor/maskedinput.min.js?v=3.3.20399"
            type="text/javascript"
          ></script>
          <script
            src="https://cdn.jotfor.ms/js/vendor/jquery.maskedinput.min.js?v=3.3.20399"
            type="text/javascript"
          ></script>
          <script
            type="text/javascript"
            src="https://www.google.com/recaptcha/api.js?render=explicit&amp;onload=recaptchaLoadedinput_12"
          ></script>
          <script src="/js/jotform.js" type="text/javascript"></script>
        </Helmet>
      )}
      <form
        className="jotform-form"
        action="https://submit.jotform.com/submit/202635220764046/"
        method="post"
        name="form_202635220764046"
        id="202635220764046"
        acceptCharset="utf-8"
        autoComplete="on"
      >
        <input
          type="hidden"
          name="formID"
          onChange={handleChange}
          value={formData.formID}
        />
        <input
          type="hidden"
          name="JWTContainer"
          id="JWTContainer"
          onChange={handleChange}
          value={formData.JWTContainer}
        />
        <input
          type="hidden"
          name="cardinalOrderNumber"
          id="cardinalOrderNumber"
          onChange={handleChange}
          value={formData.cardinalOrderNumber}
        />
        <div role="main" className="form-all">
          <ul className="form-section page-section">
            <li
              className="form-line anim jf-required"
              data-type="control_textbox"
              id="id_8"
            >
              <label
                className="form-label form-label-left form-label-auto"
                id="label_8"
                htmlFor="input_8"
              >
                Name<span className="form-required">*</span>
              </label>
              <div id="cid_8" className="form-input jf-required">
                <input
                  type="text"
                  id="input_8"
                  name="q8_name"
                  data-type="input-textbox"
                  className="form-textbox validate[required]"
                  size="30"
                  onChange={handleChange}
                  value={formData.q8_name}
                  data-component="textbox"
                  aria-labelledby="label_8"
                  required
                />
              </div>
            </li>
            <li
              className="form-line anim jf-required"
              data-type="control_email"
              id="id_4"
            >
              <label
                className="form-label form-label-left form-label-auto"
                id="label_4"
                htmlFor="input_4"
              >
                Email<span className="form-required">*</span>
              </label>
              <div id="cid_4" className="form-input jf-required">
                <input
                  type="email"
                  id="input_4"
                  name="q4_email"
                  className="form-textbox validate[required, Email]"
                  size="30"
                  onChange={handleChange}
                  value={formData.q4_email}
                  data-component="email"
                  aria-labelledby="label_4"
                  required
                />
              </div>
            </li>
            <li className="form-line anim" data-type="control_phone" id="id_5">
              <label
                className="form-label form-label-left form-label-auto"
                id="label_5"
                htmlFor="input_5_full"
              >
                {" "}
                Phone Number{" "}
              </label>
              <div id="cid_5" className="form-input">
                <span
                  className="form-sub-label-container"
                  style={{ verticalAlign: "top" }}
                >
                  <input
                    type="tel"
                    id="input_5_full"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="q5_phoneNumber"
                    className="form-textbox validate[Fill Mask]"
                    autoComplete="off"
                    onChange={handleChange}
                    value={formData.q5_phoneNumber}
                    data-component="phone"
                    aria-labelledby="label_5"
                    placeholder="123-456-7890"
                  />
                  <label
                    className="form-sub-label text-muted small"
                    htmlFor="input_5_full"
                    id="sublabel_5_masked"
                    style={{ minHeight: "13px" }}
                    aria-hidden="false"
                  >
                    Format: 123-456-7890
                  </label>
                </span>
              </div>
            </li>
            <li
              className="form-line anim jf-required"
              data-type="control_textarea"
              id="id_7"
            >
              <label
                className="form-label form-label-left form-label-auto"
                id="label_7"
                htmlFor="input_7"
              >
                Message<span className="form-required">*</span>
              </label>
              <div id="cid_7" className="form-input jf-required">
                <textarea
                  id="input_7"
                  className="form-textarea validate[required]"
                  name="q7_typeA"
                  cols="40"
                  rows="6"
                  data-component="textarea"
                  required
                  aria-labelledby="label_7"
                ></textarea>
              </div>
            </li>
            <li
              className="form-line jf-required"
              data-type="control_captcha"
              id="id_12"
            >
              <label
                className="form-label form-label-top"
                id="label_12"
                htmlFor="input_12"
              >
                Please verify that you are human
                <span className="form-required">*</span>
              </label>
              <div id="cid_12" className="form-input-wide jf-required">
                <section data-wrapper-react="true">
                  <div
                    id="recaptcha_input_12"
                    data-component="recaptcha"
                    data-callback="recaptchaCallbackinput_12"
                    data-expired-callback="recaptchaExpiredCallbackinput_12"
                  ></div>
                  <input
                    type="hidden"
                    id="input_12"
                    className="hidden validate[required]"
                    name="recaptcha_visible"
                    required=""
                  />
                </section>
              </div>
            </li>
            <li className="form-line anim" data-type="control_button" id="id_2">
              <div id="cid_2" className="form-input-wide">
                <div
                  data-align="left"
                  className="text-left form-buttons-wrapper form-buttons-left jsTest-button-wrapperField"
                >
                  <button
                    id="input_2"
                    type="submit"
                    className="ml-0 form-submit-button button submit-button jf-form-buttons jsTest-submitField px-5 py-2"
                    data-component="button"
                    data-content=""
                  >
                    Send
                  </button>
                </div>
              </div>
            </li>
            <li className="d-none">
              Should be Empty:
              <input
                type="text"
                name="website"
                onChange={handleChange}
                value={formData.website}
              />
            </li>
          </ul>
        </div>
      </form>
    </>
  )
}

export default Form
