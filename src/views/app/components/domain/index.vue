<template>
  <div style="margin: 16px;">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增</a-button>
      </template>
      <template #bodyCell="{ column, record, text }">
        <template v-if="column.key === 'note'">
          <Popover trigger="hover" placement="left">
            <template #content>
              <template v-if="noteHistoryArr.length != 0">
                <p v-for="(item, index) in noteHistoryArr" :key="index">
                  <span>时间:{{ formatDate(item.created) }}</span>&emsp;<span>是否为隐私协议:{{ record.is_privacy == 1 ? '是' : '否'
                  }}</span> &emsp;{{ item.note }}</p>
              </template>
              <template v-else>
                <p>暂无数据</p>
              </template>
            </template>
            <span @mouseenter="getNote(record)">{{ text }}</span>
          </Popover>
        </template>
        <template v-if="column.key === 'action'">
          <Popconfirm @confirm="confirm(record)" @cancel="cancel" placement="left">
            <template #title>
              <a-textarea v-model:value="note" placeholder="备注" />
            </template>
            <a-button color="error">停用</a-button>
          </Popconfirm>
          <Popconfirm @confirm="confirmPrivacy(record)" @cancel="cancel" placement="left">
            <template #title>
              <a-textarea v-model:value="note" placeholder="备注" />
            </template>
            <a-button color="success" style="margin-left: 10px;">设为隐私协议</a-button>
          </Popconfirm>

        </template>
      </template>
    </BasicTable>
    <DataDrawer @register="registerDrawer" @successAdd="handleAdd" />
  </div>
</template>
<script lang="ts" setup>
import { watch, defineEmits, ref } from 'vue';
import { BasicTable, useTable } from '/@/components/Table';
import { useDrawer } from '/@/components/Drawer';
import DataDrawer from './DataDrawer.vue';
import { columns } from './tableData';
import { Popconfirm, Popover } from 'ant-design-vue';
import { stop, setPrivacy, noteHistory } from '/@/api/app';
import { formatDate } from '../../tableData';
const props = defineProps({
  app_id: {
    type: Number,
  },
  domain: {
    type: Array,
    default: []
  }
});
watch(props, () => {
  setTableData(props.domain)
});
const note = ref();
const noteHistoryArr: any = ref([]);
const emit = defineEmits(['success']);
const [registerDrawer, { openDrawer }] = useDrawer();
const [registerTable, { setTableData }] = useTable({
  title: '域名列表',
  columns,
  striped: false,
  showTableSetting: true,
  bordered: true,
  showIndexColumn: false,
  canResize: false,
  pagination: false,
  tableSetting: {
    redo: false
  },
  actionColumn: {
    width: 250,
    title: '操作',
    dataIndex: 'action',
  },
});
const handleCreate = () => {
  openDrawer(true, {
    app_id: props.app_id
  });
};
const cancel = () => {
  note.value = '';
};
const confirm = async (record) => {
  await stop({ table: 'app_domain', id: record.id, note: note.value });
  emit('success');
  note.value = ''
};

const confirmPrivacy = async (record) => {
  await setPrivacy({ id: record.id, note: note.value, table: 'app_domain' });
  emit('success');
  note.value = ''
};
const handleAdd = () => {
  emit('success');
};
const getNote = async (record) => {
  let res = await noteHistory({ id: record.id })
  noteHistoryArr.value = res.items;
}
</script>