export const state = {
  notes: [],
  timestamps: [],
};

export const mutations = {
  ADD_NOTE(state, payload) {
    let newNote = payload;
    state.notes.push(newNote);
  },
  ADD_TIMESTAMP(state, payload) {
    let newTimeStamp = payload;
    state.timestamps.push(newTimeStamp);
  },
};

export const actions = {
  addNote(context, payload) {
    context.commit("ADD_NOTE", payload);
  },
  addTimestamp(context, payload) {
    context.commit("ADD_TIMESTAMP", payload);
  },
};

export const getters = {
  getNotes: (state) => state.notes,
  getTimestamps: (state) => state.timestamps,
  getNoteCount: (state) => state.notes.length,
};
