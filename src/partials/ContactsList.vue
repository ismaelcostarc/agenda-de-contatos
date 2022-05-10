<template>
  <div class="table__container">
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
              'table__row--highlighted': mustBeHighlighted(contact),
            }"
            class="table__row"
          >
            <td>
              <div
                :style="{ 'background-color': '#' + contact.color }"
                class="table__first-letter"
              >
                {{ firstLetterOf(contact.name) }}
              </div>
            </td>
            <td>{{ contact.name }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.phone }}</td>
            <td class="table__icons">
              <img @click="editContact(index)" src="@/assets/img/ic-edit.svg" />
              <img
                @click="removeContact(index)"
                src="@/assets/img/ic-delete.svg"
              />
            </td>
          </tr>
        </template>
      </template>
    </table>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "ContactsList",
  props: {
    isNewContact: {
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
    isNewContact(value) {
      if (value) {
        setTimeout(() => {
          this.$emit("newContactExpired");
        }, 10000);
      }
    },
  },
  computed: {
    ...mapState(["contacts"]),
  },
  methods: {
    firstLetterOf(name) {
      return name.charAt(0).toUpperCase();
    },
    mustBeHighlighted(contact) {
      return contact.isLastContact && this.isNewContact;
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

.table {
  &__container {
    padding: 1rem;
  }

  &__row--highlighted {
    background-color: var(--very-light-pink);
  }

  &__row:hover {
    background-color: var(--very-light-pink);
  }

  &__icons {
    display: flex;
    gap: 1rem;

    img {
      cursor: pointer;
    }
  }
}
</style>
