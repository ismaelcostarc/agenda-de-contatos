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
      <template v-if="filterByWord(contact)">
        <tr
          :key="contact.color"
          :class="{
            'table__row--highlighted': false,
          }"
        >
          <td>
            <div
              class="table__first-letter"
              :style="{ 'background-color': '#' + contact.color }"
            >
              {{ firstLetter(contact.name) }}
            </div>
          </td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.phone }}</td>
          <td class="table__icons">
            <img src="@/assets/img/ic-edit.svg" @click="editContact(index)" />
            <img
              src="@/assets/img/ic-delete.svg"
              @click="removeContact(index)"
            />
          </td>
        </tr>
      </template>
    </template>
  </table>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "ContactsList",
  props: {
    newContact: {
      type: Boolean,
      required: true,
    },
    filter: {
      type: String,
      required: false,
      default: "",
    },
  },
  watch: {
    newContact(value) {
      if (value) {
        setTimeout(() => {
          this.$emit("newContactExpired");
        }, 2000);
      }
    },
  },
  computed: {
    ...mapState(["contacts"]),
  },
  methods: {
    firstLetter(name) {
      return name.charAt(0).toUpperCase();
    },
    mustBeHighlighted(contact) {
      return contact.isLast && this.newContact;
    },
    editContact(index) {
      this.$emit("showEditModal", index);
    },
    removeContact(index) {
      this.$emit("showRemoveModal", index);
    },
    filterByWord(contact) {
      const nameIncludesWord = contact.name
        .toUpperCase()
        .includes(this.filter.toUpperCase());
      const emailIncludesWord = contact.email
        .toUpperCase()
        .includes(this.filter.toUpperCase());

      return nameIncludesWord || emailIncludesWord;
    },
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

  .table__first-letter {
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    border-radius: 100%;
    text-align: center;
    color: var(--white-two);
  }
}

.table__row--highlighted td {
  background-color: var(--very-light-pink);
}

.table__icons {
  display: flex;
  gap: 1rem;

  img {
    cursor: pointer;
  }
}
</style>
