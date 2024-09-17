<script setup lang="js">
import { ref } from 'vue';


const headers = [
    { title: 'Name', key: 'full_name' },
    { title: 'Email', key: 'email' },
    { title: 'Check-In', key: 'check_in' },
    { title: 'Check-Out', key: 'check_out' }
]

const items = ref([
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
    {
        id: 1,
        full_name: 'test',
        email: 'test@test.com',
        event: {
            id: 1,
            check_in_date: new Date(),
            check_out_date: new Date() + 1,
            source_barcode: '1S5gsA',
            guest_id: 1
        }
    },
])

</script>
<template>
    <v-main class="full-screen content-with-app-bar">
        <v-card-text class="full-height">
            <v-data-table :items="items" :headers="headers" class="custom-data-table full-height">
            </v-data-table>
        </v-card-text>
    </v-main>
</template>
<style>
.full-screen {
    /* Ocupa 100% da largura da tela */
    padding: 0;
    /* Remove padding */
    margin: 0;
    /* Remove margens */
    display: flex;
    /* Garante que o conteúdo dentro possa se expandir */
    flex-direction: column;
}

.content-with-app-bar {
  padding-top: 0px;   /* Compensa a altura da barra fixa */
  overflow: hidden;    /* Evita rolagem desnecessária fora da tabela */
}

.full-height {
  height: 100%;        /* Ocupa toda a altura disponível */
  display: flex;       /* Flexbox para ajuste de layout */
  flex-direction: column;
}

.custom-data-table {
  flex-grow: 1;        /* Faz a tabela crescer para ocupar o espaço restante */
  overflow: auto;      /* Permite rolagem interna da tabela se necessário */
}
</style>