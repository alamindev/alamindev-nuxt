<template>
  <section class="page--section">
    <div class="page-title">
      <h2>Contact</h2>
    </div>
    <perfect-scrollbar>
      <div class="section-content">
        <div class="row g-0">
          <!-- Contact Info -->
          <div class="col-xs-12 col-sm-4">
            <div class="lm-info-block gray-default">
              <i class="lnr lnr-map-marker"></i>
              <h4>Mymensingh</h4>
              <span class="lm-info-block-value"></span>
              <span class="lm-info-block-text"></span>
            </div>

            <div class="lm-info-block gray-default">
              <i class="lnr lnr-phone-handset"></i>
              <h4>+8001836453705</h4>
              <span class="lm-info-block-value"></span>
              <span class="lm-info-block-text"></span>
            </div>

            <div class="lm-info-block gray-default">
              <i class="lnr lnr-envelope"></i>
              <h4>
                <a href="mailto:mdalamin6554@gmail.com" class="__cf_email__"
                  >mdalamin6554@gmail.com</a
                >
              </h4>
              <span class="lm-info-block-value"></span>
              <span class="lm-info-block-text"></span>
            </div>

            <div class="lm-info-block gray-default">
              <i class="lnr lnr-checkmark-circle"></i>
              <h4>Freelance Available</h4>
              <span class="lm-info-block-value"></span>
              <span class="lm-info-block-text"></span>
            </div>
          </div>
          <!-- End of Contact Info -->

          <!-- Contact Form -->
          <div class="col-xs-12 col-sm-8">
            <div id="map" class="map">
              <div class="lmpixels-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4067.2147493481157!2d90.40741223417088!3d24.74484630340325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f91ed502443%3A0x7d68a9263976d1f!2sChorpara%20More!5e0!3m2!1sbn!2sbd!4v1643647656039!5m2!1sbn!2sbd"
                  width="600"
                  height="450"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div class="block-title">
              <h3>How Can I <span>Help You?</span></h3>
            </div>

            <form
              id="contact_form"
              class="contact-form"
              action="https://formspree.io/f/xnqwppya"
              method="post"
            >
              <div class="messages"></div>

              <div class="controls two-columns">
                <div class="fields clearfix">
                  <div class="left-column">
                    <div class="form-group form-group-with-icon">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder=""
                        required="required"
                        data-error="Name is required."
                      />
                      <label>Full Name</label>
                      <div class="form-control-border"></div>
                      <div class="help-block with-errors"></div>
                    </div>

                    <div class="form-group form-group-with-icon">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        class="form-control"
                        placeholder=""
                        required="required"
                        data-error="Valid email is required."
                      />
                      <label>Email Address</label>
                      <div class="form-control-border"></div>
                      <div class="help-block with-errors"></div>
                    </div>

                    <div class="form-group form-group-with-icon">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        class="form-control"
                        placeholder=""
                      />
                      <label>Subject</label>
                      <div class="form-control-border"></div>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="right-column">
                    <div class="form-group form-group-with-icon">
                      <textarea
                        id="form_message"
                        name="message"
                        class="form-control"
                        placeholder=""
                        rows="7"
                        required="required"
                        data-error="Please, leave me a message."
                      ></textarea>
                      <label>Message</label>
                      <div class="form-control-border"></div>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                </div>

                <div
                  class="g-recaptcha"
                  data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
                  data-theme="dark"
                ></div>

                <input
                  type="submit"
                  class="button btn-send"
                  value="Send message"
                />
              </div>
            </form>
          </div>
          <!-- End of Contact Form -->
        </div>
      </div>
    </perfect-scrollbar>
  </section>
</template>

<script>
export default {
  head: {
    title: "Contact me",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Contact with me if need any kind of website problem",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "resume, cv, php, laravel, vuejs, nodejs, contact page, design, development",
      },
    ],
  },
};
</script>

<style>
</style>
