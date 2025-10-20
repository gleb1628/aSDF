import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useEntryStore = defineStore('social-book', () => {
  const entries = ref([
    {
      id: 1,
      title: "Сегодня было замечательное предложение пойти поужинать этим вечером. Главное, чтобы погода была преимущественно теплой.",
      comments: [
        { id: 1, text: "Самый яркий комментарий в этом посте" },
        { id: 2, text: "Один из бессмысленный комментарий в этом посте" }
      ]
    },
    {
      id: 2,
      title: "Краткосрочное вымышленное преломление может выполнять особую роль в   пространстве главной роли игрока ",
      comments: [
        { id: 1, text: "Очень научно и непонятно" },
      ]
    }
  ]);

  const addEntry = (title) => {
    if (!title.trim()) return;
    const newEntry = {
      id: Date.now(),
      title: title.trim(),
      comments: []
    };
    entries.value.unshift(newEntry);
  };

  const removeEntry = (id) => {
    entries.value = entries.value.filter(entry => entry.id !== id);
  };

  const updateEntry = (id, newTitle) => {
    const entry = entries.value.find(e => e.id === id);
    if (entry) {
      entry.title = newTitle.trim();
    }
  };

  const addRemark = (entryId, text) => {
    if (!text.trim()) return;
    const entry = entries.value.find(e => e.id === entryId);
    if (entry) {
      const newRemark = {
        id: Date.now(),
        text: text.trim()
      };
      entry.comments.push(newRemark);
    }
  };

  const removeRemark = (entryId, remarkId) => {
    const entry = entries.value.find(e => e.id === entryId);
    if (entry) {
      entry.comments = entry.comments.filter(c => c.id !== remarkId);
    }
  };

  return {
    entries,
    addEntry,
    removeEntry,
    updateEntry,
    addRemark,
    removeRemark
  };
});