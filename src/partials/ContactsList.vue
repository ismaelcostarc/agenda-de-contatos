<template>
  <table class="contacts__table">
    <tr>
      <th></th>
      <th>Contatos</th>
      <th>E-mail</th>
      <th>Telefone</th>
      <th></th>
    </tr>

    <template v-for="(contact, index) in contacts">
      <tr :key="index">
        <td></td>
        <td>{{ contact.name }}</td>
        <td>{{ contact.email }}</td>
        <td>{{ contact.phone }}</td>
        <td></td>
      </tr>
    </template>
  </table>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "ContactsList",
  computed: {
    ...mapState(["contacts"]),
  },
};
</script>
<style lang="scss" scoped>
.contacts__table {
  width: 100%;
  border-radius: 4px;
  border: solid 1px var(--white);
  background-color: var(--white-two);

  th,
  td {
    padding: 1rem;
    text-align: left;
    font-size: 0.9rem;
  }

  th {
    color: var(--bluey-grey);

    &:first-child,
    &:last-child {
      padding: 0;
    }

    &:first-child {
      width: 3rem;
    }

    &:last-child {
      width: 6rem;
    }
  }
}
</style>
