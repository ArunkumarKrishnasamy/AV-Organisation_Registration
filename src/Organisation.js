import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Organisation() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      companyName: "",
      website: "",
      industry: "",
      country: "",
      timezone: "",
      phoneNumber: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.companyName) {
        errors.companyName = "Please Enter Company Name";
      }
      if (!values.website) {
        errors.website = "Please Enter Website Address";
      }
      if (!values.industry) {
        errors.industry = "Please Enter Which type of industry";
      }
      if (!values.country) {
        errors.country = "Please Enter your Country Name";
      }
      if (!values.timezone) {
        errors.timezone = "Please Enter Time Zone";
      }
      if (!values.phoneNumber) {
        errors.phoneNumber = "Please Enter Phone Number";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3001/organisation", values);
        alert("Created Successfully");
        formik.resetForm();
        navigate("/registration");
      } catch (error) {
        console.log(error);
        alert("Posting data went wrong");
      }
    },
  });
  return (
    <div className="left-block">
      <div class="container">
        <div className="organisation-title fw-bold text-center fs-3 m-5 text-primary">
          Create your Organisation
        </div>
        <div className="form-label-top big">
          <form className="registration-form" onSubmit={formik.handleSubmit}>
            <div className="form-group m-2">
              <div className="form-control">
                <input
                  data-val="true"
                  data-val-email="Please enter Company Name"
                  data-val-required="The Company Name is required."
                  id="companyName"
                  name="companyName"
                  required="required"
                  tabindex="1"
                  type="text"
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label>
                  Company Name
                  <span
                    aria-required="true"
                    className="required"
                    title="Required"
                  >
                    *
                  </span>
                </label>
                <span style={{ color: "red" }}>
                  {formik.touched.companyName && formik.errors.companyName ? (
                    <div> {formik.errors.companyName}</div>
                  ) : null}
                </span>
              </div>
            </div>
            <div className="form-group m-2">
              <div className="form-control">
                <input
                  data-val="true"
                  data-val-email="Please enter Website URL"
                  data-val-required="Website URL is required."
                  id="website"
                  name="website"
                  required="required"
                  tabindex="1"
                  type="text"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="website.com"
                />
                <label>
                  Website URL
                  <span
                    aria-required="true"
                    className="required"
                    title="Required"
                  >
                    *
                  </span>
                </label>
                <span style={{ color: "red" }}>
                  {formik.touched.website && formik.errors.website ? (
                    <div>{formik.errors.website}</div>
                  ) : null}
                </span>
              </div>
            </div>
            <div className="form-group m-2">
              <div className="form-control">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.industry}
                  name="industry"
                  id="industry"
                >
                  <option selected>Choose the type of Industry</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Finance">Finance</option>
                  <option value="Medical">Medical</option>
                  <option value="Software">Software</option>
                  <option value="Education">Education</option>
                  <option value="Textile">Textile</option>
                  <option value="Media">Media and news</option>
                  <option value="Food processing">Food processing</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Construction">Construction</option>
                  <option value="Law">Law</option>
                  <option value="Tourism">Tourism</option>
                  <option value="Others">Others</option>
                </select>
                <span style={{ color: "red" }}>
                  {formik.touched.industry && formik.errors.industry ? (
                    <div> {formik.errors.industry}</div>
                  ) : null}
                </span>
              </div>
            </div>
            <div className="form-group m-2">
              <div className="form-control">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  name="country"
                  id="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option selected>Choose your Country</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AX">Aland Islands</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="BN">Brunei Darussalam</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo</option>
                  <option value="CD">
                    Congo, Democratic Republic of the Congo
                  </option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CI">Cote D'Ivoire</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curacao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands (Malvinas)</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HM">Heard Island and Mcdonald Islands</option>
                  <option value="VA">Holy See (Vatican City State)</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran, Islamic Republic of</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="KP">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="KR">Korea, Republic of</option>
                  <option value="XK">Kosovo</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Lao People's Democratic Republic</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libyan Arab Jamahiriya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macao</option>
                  <option value="MK">
                    Macedonia, the Former Yugoslav Republic of
                  </option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia, Federated States of</option>
                  <option value="MD">Moldova, Republic of</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="AN">Netherlands Antilles</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau</option>
                  <option value="PS">Palestinian Territory, Occupied</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="RE">Reunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russian Federation</option>
                  <option value="RW">Rwanda</option>
                  <option value="BL">Saint Barthelemy</option>
                  <option value="SH">Saint Helena</option>
                  <option value="KN">Saint Kitts and Nevis</option>
                  <option value="LC">Saint Lucia</option>
                  <option value="MF">Saint Martin</option>
                  <option value="PM">Saint Pierre and Miquelon</option>
                  <option value="VC">Saint Vincent and the Grenadines</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">Sao Tome and Principe</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="CS">Serbia and Montenegro</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SX">Sint Maarten</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="GS">
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard and Jan Mayen</option>
                  <option value="SZ">Swaziland</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syrian Arab Republic</option>
                  <option value="TW">Taiwan, Province of China</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania, United Republic of</option>
                  <option value="TH">Thailand</option>
                  <option value="TL">Timor-Leste</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad and Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks and Caicos Islands</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                  <option value="UM">
                    United States Minor Outlying Islands
                  </option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Viet Nam</option>
                  <option value="VG">Virgin Islands, British</option>
                  <option value="VI">Virgin Islands, U.s.</option>
                  <option value="WF">Wallis and Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
                <span style={{ color: "red" }}>
                  {formik.touched.country && formik.errors.country ? (
                    <div>{formik.errors.country} </div>
                  ) : null}
                </span>
              </div>
            </div>
            <div className="form-group m-2">
              <div className="form-control">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  value={formik.values.timezone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="timezone"
                  id="timezone"
                >
                  <option selected>
                    Time Zone <span>*</span>
                  </option>

                  <option value="-12:00">
                    (GMT -12:00) Eniwetok, Kwajalein
                  </option>
                  <option value="-11:00">
                    (GMT -11:00) Midway Island, Samoa
                  </option>
                  <option value="-10:00">(GMT -10:00) Hawaii</option>
                  <option value="-09:50">(GMT -9:30) Taiohae</option>
                  <option value="-09:00">(GMT -9:00) Alaska</option>
                  <option value="-08:00">
                    (GMT -8:00) Pacific Time (US &amp; Canada)
                  </option>
                  <option value="-07:00">
                    (GMT -7:00) Mountain Time (US &amp; Canada)
                  </option>
                  <option value="-06:00">
                    (GMT -6:00) Central Time (US &amp; Canada), Mexico City
                  </option>
                  <option value="-05:00">
                    (GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima
                  </option>
                  <option value="-04:50">(GMT -4:30) Caracas</option>
                  <option value="-04:00">
                    (GMT -4:00) Atlantic Time (Canada), Caracas, La Paz
                  </option>
                  <option value="-03:50">(GMT -3:30) Newfoundland</option>
                  <option value="-03:00">
                    (GMT -3:00) Brazil, Buenos Aires, Georgetown
                  </option>
                  <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
                  <option value="-01:00">
                    (GMT -1:00) Azores, Cape Verde Islands
                  </option>
                  <option value="+00:00" selected="selected">
                    (GMT) Western Europe Time, London, Lisbon, Casablanca
                  </option>
                  <option value="+01:00">
                    (GMT +1:00) Brussels, Copenhagen, Madrid, Paris
                  </option>
                  <option value="+02:00">
                    (GMT +2:00) Kaliningrad, South Africa
                  </option>
                  <option value="+03:00">
                    (GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg
                  </option>
                  <option value="+03:50">(GMT +3:30) Tehran</option>
                  <option value="+04:00">
                    (GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
                  </option>
                  <option value="+04:50">(GMT +4:30) Kabul</option>
                  <option value="+05:00">
                    (GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent
                  </option>
                  <option value="+05:50">
                    (GMT +5:30) Bombay, Calcutta, Madras, New Delhi
                  </option>
                  <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
                  <option value="+06:00">
                    (GMT +6:00) Almaty, Dhaka, Colombo
                  </option>
                  <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
                  <option value="+07:00">
                    (GMT +7:00) Bangkok, Hanoi, Jakarta
                  </option>
                  <option value="+08:00">
                    (GMT +8:00) Beijing, Perth, Singapore, Hong Kong
                  </option>
                  <option value="+08:75">(GMT +8:45) Eucla</option>
                  <option value="+09:00">
                    (GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
                  </option>
                  <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
                  <option value="+10:00">
                    (GMT +10:00) Eastern Australia, Guam, Vladivostok
                  </option>
                  <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
                  <option value="+11:00">
                    (GMT +11:00) Magadan, Solomon Islands, New Caledonia
                  </option>
                  <option value="+11:50">(GMT +11:30) Norfolk Island</option>
                  <option value="+12:00">
                    (GMT +12:00) Auckland, Wellington, Fiji, Kamchatka
                  </option>
                  <option value="+12:75">(GMT +12:45) Chatham Islands</option>
                  <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
                  <option value="+14:00">
                    (GMT +14:00) Line Islands, Tokelau
                  </option>
                </select>
                <span style={{ color: "red" }}>
                  {" "}
                  {formik.touched.timezone && formik.errors.timezone ? (
                    <div> {formik.errors.timezone}</div>
                  ) : null}
                </span>
              </div>
            </div>
            <div className="form-group m-2 mt-3">
              <div className="form-control">
                <input
                  data-val="true"
                  data-val-email="Please enter Phone Number"
                  data-val-required="Phone Number is required."
                  id="phoneNumber"
                  name="phoneNumber"
                  required="required"
                  tabindex="1"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  onBlur={formik.handleBlur}
                />
                <label>
                  Phone Number
                  <span
                    aria-required="true"
                    className="required"
                    title="Required"
                  >
                    *
                  </span>
                </label>
                <span style={{ color: "red" }}>
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div>{formik.errors.phoneNumber}</div>
                  ) : null}
                </span>
              </div>
            </div>
            <div className="form-actions">
              <div className="form-group m-2">
                <button
                  type="submit"
                  id="btnSubmit"
                  className="btn btn-primary btn-block btn-big"
                  tabindex="6"
                  disabled={!Object.keys(formik.errors).length == 0}
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Organisation;
