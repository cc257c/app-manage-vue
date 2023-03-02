<template>
  <div style="margin-bottom: 16px;padding:10px ;background-color: white;">
    <BasicForm @register="registerForm" @submit="handleSubmit" :style="{width: `calc(100% - ${slotWidth}px)`}">
    </BasicForm>
    <div class="add-condition">
      <Dropdown placement="bottom" :trigger="['click']">
        <a class="ant-dropdown-link" @click.prevent v-if="options.length != 0"> 添加筛选条件 </a>
        <template #overlay>
          <Menu @click="handelClick">
            <MenuItem v-for="item in options" :key="item.value" :disabled="item.disabled">
            {{ item.label }}
            </MenuItem>
          </Menu>
        </template>
      </Dropdown>
    </div>
    <div class="slot">
      <slot name="end"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, nextTick, onMounted, PropType } from 'vue';
import { BasicForm, useForm, FormSchema } from '/@/components/Form/index';
import { FieldMapToTime } from '/@/components/Form/src/types/form'
import { Dropdown, Menu, MenuItem } from 'ant-design-vue';
export default defineComponent({
  components: { BasicForm, Dropdown, Menu, MenuItem },
  props: {
    // 表单
    schemas: {
      type: Array as PropType<FormSchema[]>,
      default: [],
      required: true
    },
    // 将date字段解析为两个字段
    fieldMapToTime: {
      type: Array as PropType<FieldMapToTime>,
      default: [['date', ['start_date', 'end_date'], 'YYYY-MM-DD']],
    },
    // 插槽宽度
    slotWidth: {
      type: Number,
      default: 0
    },
    // 是否将date字段解析为两个字段
    map: {
      type: Boolean,
      default: true
    },
    // 是否进入页面就查询
    immediate: {
      type: Boolean,
      default: true
    }
  },
  emits: ['success'],
  setup(props, { emit }) {
    let receiveSchemas: FormSchema[] = props.schemas;//接收表单配置
    let displaySchemas: FormSchema[] = [];// 需要显示的表单配置
    let hideSchemas: FormSchema[] = [];//需要隐藏的表单配置
    let displayLabel: any[] = [];
    const selectValue = ref('添加筛选条件');
    const options: any = ref([]);//筛选条件下拉选项
    initData();
    const [registerForm, { appendSchemaByField, removeSchemaByFiled, getFieldsValue }] = useForm({
      showResetButton: false,
      schemas: displaySchemas,
      compact: true,
      actionColOptions: {
        span: 1
      },
      fieldMapToTime: props.map ? props.fieldMapToTime : []
    });
    function initData() {
      receiveSchemas.forEach((item, index) => {
        if (item.show) {
          displayLabel.push(item.label);
          displaySchemas.push(item)
        } else {
          hideSchemas.push(item);
          let obj: any = {
            label: item.label,
            value: item.field,
            disabled: false,
            index: index
          }
          options.value.push(obj);
        }
      });
      for (let key in hideSchemas) {
        delete hideSchemas[key].show
      }
    }
    function handelClick({ key }) {
      hideSchemas.forEach((item) => {
        if (item.field == key) {
          appendSchemaByField(item, '');
        }
      })
      // 禁用该选项
      options.value.forEach((item) => {
        if (item.value == key) {
          item.disabled = true;
        }
      });
      setTimeout(() => {
        handleCreate()
      }, 0);

    };
    function handleCreate() {
      nextTick(() => {
        let del: any = document.querySelectorAll('.suffix');//拿到类名为suffix的所有元素
        let handleDel: any[] = [];
        del.forEach((i) => {
          let text = i.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].textContent;
          if (!displayLabel.includes(text)) {
            handleDel.push(i)
          }
        })
        for (let i = 0; i < handleDel.length; i++) {
          handleDel[i].innerHTML = `<span>${handleDel[i].textContent == 'false' ? '' : handleDel[i].textContent}</span><svg t="1667872874672" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1386" width="16" height="16"><path d="M512 595.84765625l195.69757462 195.69757462a59.2473793 59.2473793 0 1 0 83.84765625-83.84765625L595.92644882 512l195.61878205-195.69757462a59.2473793 59.2473793 0 1 0-83.84765625-83.84765625L512 428.07355118 316.30242538 232.45476913a59.2473793 59.2473793 0 1 0-83.84765625 83.84765625L428.07355118 512 232.45476913 707.69757462a59.2473793 59.2473793 0 1 0 83.84765625 83.84765625L512 595.92644882z" fill="#d81e06" p-id="1387"></path></svg>`;
          function click(e) {
            let label = e.path[7].children[0].children[0].textContent;
            hideSchemas.forEach((item) => {
              if (item.label == label) {
                removeSchemaByFiled(item.field)
              }
            });
            options.value.forEach((item) => {
              if (item.label == label) {
                item.disabled = false;
              }
            });
          }
          handleDel[i].addEventListener('click', click);
        }
      })
    }
    function handleSubmit() {
      const values = getFieldsValue();
      emit('success', values);
    };
    onMounted(() => {
      nextTick(() => {
        let box = document.querySelector('.ant-row');
        let sel: any = document.querySelector('.add-condition');
        let slot: any = document.querySelector('.slot');
        let btn = document.querySelector('.ant-col-1');
        box?.insertBefore(sel, btn);
        box?.appendChild(slot);
        if(props.immediate){
          handleSubmit()
        }
      });
    });
    return {
      selectValue, options, registerForm, handelClick, handleSubmit, slotWidth: props.slotWidth
    }
  }
})
</script>
<style lang="less" scoped>
::v-deep(.ant-form-item-control) {
  margin-top: 0 !important;
}

::v-deep(.ant-form-item) {
  margin-right: 15px;
}

::v-deep(.ant-col .ant-select-selector) {
  min-width: 120px;
}

// 日期表单宽度
::v-deep(.ant-picker) {
  width: 100%;
}

::v-deep(.suffix) {
  height: 30px;
}

::v-deep(.suffix .icon:hover) {
  cursor: pointer;
}

::v-deep(.add-condition .ant-select-selection-item) {
  color: #169bd5 !important;
}

::v-deep(.add-condition) {
  color: #169bd5 !important;
  height: 32px;
  line-height: 32px;
  margin-right: 12px;
}

.slot {
  position: absolute;
  right: 20px;
}
</style>
