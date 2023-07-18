<template>
  <div class="bg-white">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
    >
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Servicios
        </h2>
        <p class="mt-4 text-gray-500 justify-info">
          Nuestro principal objetivo es lograr que nuestros clientes se sientan
          satisfechos con los servicios que ofrecemos, y es por eso que la
          diferencia entre nuestro hotel y los demás es que estamos dedicados a
          hacer de su estadía una experiencia única entregándole toda la
          comodidad y atención que se merecen. A continuación, algunos de
          nuestros servicios:
        </p>

        <dl
          class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"
        >
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Instalaciones funcionales</dt>
            <dd class="mt-2 text-sm text-gray-500">Texto dummy</dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Estacionamiento seguro</dt>
            <dd class="mt-2 text-sm text-gray-500">Texto dummy</dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">
              Closets amplios y TV por cable
            </dt>
            <dd class="mt-2 text-sm text-gray-500">Texto dummy</dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Acabados de primera</dt>
            <dd class="mt-2 text-sm text-gray-500">Texto dummy</dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Camas confortables</dt>
            <dd class="mt-2 text-sm text-gray-500">Texto dummy</dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Variedad de ambientes</dt>
            <dd class="mt-2 text-sm text-gray-500">Texto dummy</dd>
          </div>
          <!--          <div class="border-t border-gray-200 pt-4">
                      <dt class="font-medium text-gray-900">
                        Restaurante con variedad de platos
                      </dt>
                      <dd class="mt-2 text-sm text-gray-500">Texto dummy</dd>
                    </div>
                    <div class="border-t border-gray-200 pt-4">
                      <dt class="font-medium text-gray-900">Ambiente acogedor</dt>
                      <dd class="mt-2 text-sm text-gray-500">Texto dummy</dd>
                    </div>
                    <div class="border-t border-gray-200 pt-4">
                      <dt class="font-medium text-gray-900">Internet en zona Wi-Fi</dt>
                      <dd class="mt-2 text-sm text-gray-500">Texto dummy</dd>
                    </div>
                    <div class="border-t border-gray-200 pt-4">
                      <dt class="font-medium text-gray-900">
                        Caja de seguridad en las habitaciones
                      </dt>
                      <dd class="mt-2 text-sm text-gray-500">Texto dummy</dd>
                    </div>-->
        </dl>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <img
          alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
          class="rounded-lg bg-gray-100 services-image"
          src="../assets/habitacion-1.jpg"
        />
        <img
          alt="Top down view of walnut card tray with embedded magnets and card groove."
          class="rounded-lg bg-gray-100 services-image"
          src="../assets/habitacion-2.jpg"
        />
        <img
          alt="Side of walnut card tray with card groove and recessed card area."
          class="rounded-lg bg-gray-100 services-image"
          src="../assets/habitacion-3.jpg"
        />
        <img
          alt="Walnut card tray filled with cards and card angled in dedicated groove."
          class="rounded-lg bg-gray-100 services-image"
          src="../assets/habitacion-4.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesSection",
};
</script>

<style scoped></style>
