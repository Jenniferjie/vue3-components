import { defineComponent } from "vue";

export default defineComponent({
  props: {
    render: {
      type: Function,
      default: () => {},
    },

    column: {
      type: Object,
      default: null,
    },

    row: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    return () => {
      const params = {
        row: props.row,
        index: props.row.index,
      };
      if (props.column) params.column = props.column;
  
      return props.render(props.render, params);
    }
  }

})
// {
//   functional: true,

//   props: {
//     row: {
//       type: Object,
//       default: null,
//     },

//     render: {
//       type: Function,
//       default: () => {},
//     },

//     index: {
//       type: Number,
//       default: 0,
//     },

//     column: {
//       type: Object,
//       default: null,
//     },
//   },

//   render: (h, ctx) => {
//     console.log(h, ctx);
//     // const params = {
//     //   row: ctx.props.row,
//     //   index: ctx.props.index,
//     // };
//     // if (ctx.props.column) params.column = ctx.props.column;

//     return render(h);
//   },
// };