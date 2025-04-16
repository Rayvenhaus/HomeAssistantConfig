from homeassistant import config_entries
import voluptuous as vol
import homeassistant.helpers.config_validation as cv

from .const import DOMAIN

class F1FlowHandler(config_entries.ConfigFlow, domain=DOMAIN):
    VERSION = 1

    async def async_step_user(self, user_input=None):
        errors = {}

        if user_input is not None:
            # Create the configuration entry
            return self.async_create_entry(
                title=user_input["sensor_name"],  # Title shown in HA
                data=user_input                   # Store the entire user_input in entry.data
            )

        # Show form to enter sensor name
        data_schema = vol.Schema({
            vol.Required("sensor_name", default="F1"): cv.string
        })

        return self.async_show_form(
            step_id="user",
            data_schema=data_schema,
            errors=errors
        )