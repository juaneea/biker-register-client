<template>
  <div
    class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-3xl lg:px-8"
  >
    <h2
      class="text-3xl font-bold mb-3 tracking-tight text-gray-900 sm:text-4xl"
    >
      Reservaciones
    </h2>
    <form>
      <div>
        <div class="border-gray-900/10 pb-12">
          <p class="mt-1 text-sm leading-6 text-gray-600 justify-info">
            Si desea conocernos y disfrutar de nuestro hotel, le invitamos a
            reservar la habitación que más se ajuste a sus expectativas llenando
            el siguiente formulario. Una vez que lo recibamos, lo contactaremos
            por correo electrónico a la brevedad para validar su reservación.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="username"
                >Nombre completo del solicitante</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    id="username"
                    v-model="reservation.fullName"
                    autocomplete="username"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    name="username"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="username"
                >C.I. / Pasaporte</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    id="username"
                    v-model="reservation.idNumber"
                    autocomplete="username"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    name="username"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="sm:col-span-1">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="username"
                >Edad</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    id="username"
                    v-model="reservation.age"
                    autocomplete="username"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6"
                    name="username"
                    style="width: 100%"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-b border-gray-900/10">
          <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="first-name"
                >Empresa</label
              >
              <div class="mt-2">
                <input
                  id="first-name"
                  v-model="reservation.company"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="first-name"
                  type="text"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="last-name"
                >R.I.F.</label
              >
              <div class="mt-2">
                <input
                  id="last-name"
                  v-model="reservation.rif"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="last-name"
                  type="text"
                />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="email"
                >Dirección</label
              >
              <div class="mt-2">
                <textarea
                  id="email"
                  v-model="reservation.address"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="email"
                  rows="3"
                  type="email"
                />
              </div>
            </div>

            <div class="sm:col-span-2 sm:col-start-1">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="city"
                >Ciudad</label
              >
              <div class="mt-2">
                <input
                  id="city"
                  v-model="reservation.city"
                  autocomplete="address-level2"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="city"
                  type="text"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="region"
                >Estado</label
              >
              <div class="mt-2">
                <input
                  id="region"
                  v-model="reservation.state"
                  autocomplete="address-level1"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="region"
                  type="text"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="postal-code"
                >País</label
              >
              <div class="mt-2">
                <input
                  id="postal-code"
                  v-model="reservation.country"
                  autocomplete="postal-code"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="postal-code"
                  type="text"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="first-name"
                >Correo Electrónico</label
              >
              <div class="mt-2">
                <input
                  id="first-name"
                  v-model="reservation.mail"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="first-name"
                  type="text"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="last-name"
                >Confirme su correo electrónico</label
              >
              <div class="mt-2">
                <input
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="last-name"
                  type="text"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="username"
                >Nombre completo del acompañante</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    id="username"
                    v-model="reservation.companionName"
                    autocomplete="username"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    name="username"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="username"
                >C.I. / Pasaporte</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    id="username"
                    v-model="reservation.companionIdNumber"
                    autocomplete="username"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    name="username"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="sm:col-span-1">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="username"
                >Edad</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    id="username"
                    v-model="reservation.companionAge"
                    autocomplete="username"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6"
                    name="username"
                    style="width: 100%"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="username"
                >Tipo de Vehículo</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    id="username"
                    v-model="reservation.vehicleType"
                    autocomplete="username"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    name="username"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="sm:col-span-3">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="username"
                >Placa del Vehículo</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    id="username"
                    v-model="reservation.plate"
                    autocomplete="username"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    name="username"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="username"
                >Fecha de ingreso
              </label>
              <div class="relative max-w-sm mt-2">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
                ></div>
                <input
                  v-model="reservation.initialDate"
                  class="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  lang="es"
                  placeholder="Selecciona una fecha"
                  type="date"
                />
                <p v-if="!dateRules" class="text-red-500">
                  La fecha de entrada no puede ser menor a la fecha actual.
                </p>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="username"
                >Fecha de salida</label
              >
              <div class="relative max-w-sm mt-2">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
                ></div>
                <input
                  v-model="reservation.finalDate"
                  class="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  lang="es"
                  placeholder="Selecciona una fecha"
                  type="date"
                />
                <p v-if="!rangeRules" class="text-red-500">
                  La fecha de entrada no puede ser menor a la fecha actual.
                </p>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="country"
                >Método de pago</label
              >
              <div class="mt-2">
                <select
                  id="country"
                  v-model="reservation.paymentMethod"
                  autocomplete="country-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  name="country"
                >
                  <option>Tarjeta de Crédito</option>
                  <option>Depósito</option>
                  <option>Transferencia</option>
                </select>
              </div>
            </div>
            <div class="sm:col-span-3">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="country"
                >Tipo de Habitación</label
              >
              <div class="mt-2">
                <select
                  id="country"
                  v-model="reservation.roomType"
                  autocomplete="country-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  name="country"
                >
                  <option>Matrimonial</option>
                  <option>Triple</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-6">
              <label
                class="block text-sm font-medium leading-6 text-gray-900"
                for="email"
                >Algún comentario o requerimiento especial</label
              >
              <div class="mt-2">
                <textarea
                  id="email"
                  v-model="reservation.comments"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="email"
                  rows="5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <div
          class="hover:cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="sendMail"
        >
          Enviar
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ReservationForm",
  data() {
    return {
      datepicker: null,
      reservation: {
        fullName: null,
        age: null,
        idNumber: null,
        company: null,
        rif: null,
        address: null,
        city: null,
        state: null,
        initialDate: null,
        finalDate: null,
        country: null,
        mail: null,
        companionName: null,
        companionAge: null,
        companionIdNumber: null,
        vehicleType: null,
        plate: null,
        paymentMethod: null,
        roomType: null,
        comments: null,
      },
      apiKey: "00158dad4bf35950b845f86cb24aa296",
      secretKey: "a0c46b64faf0a93a432ac79c6fcf07a8",
    };
  },
  computed: {
    dateRules() {
      return Date.parse(this.reservation.initialDate) > new Date();
    },
    rangeRules() {
      return (
        Date.parse(this.reservation.initialDate) <=
        Date.parse(this.reservation.finalDate)
      );
    },
  },
  methods: {
    sendMail() {
      console.log(this.reservation);
      /*const url = `https://api.mailjet.com/v3.1/send`;
      const data = {
        Messages: [
          {
            From: {
              Email: "juaneduardoescobar15@gmail.com",
              Name: "Juan",
            },
            To: [
              {
                Email: "juaneduardoescobar15@gmail.com",
                Name: "Destinatario",
              },
            ],
            Subject: "Asunto del correo",
            TextPart: this.reservation,
          },
        ],
      };
      axios.post(url, data, {
        auth: {
          username: this.apiKey,
          password: this.secretKey,
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });*/
    },
  },
};
</script>

<style scoped></style>
