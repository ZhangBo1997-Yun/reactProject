import React from 'react'
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i.toString(),
        uid: `000${i}`,
        name: `捷克君毅`,
        IDNumber: parseInt(Math.random() * 100000000000000000 * 18),
        inSchoolTime: `2016.9-2020.9`,
        sort: '本科',
        gradeClass: `16级软件（${i}）班`,
        major: `软件工程`,
        college: '信息工程学院',
        address: `London Park no. ${i}`,
    });
}
const EditableContext = React.createContext();

class EditableCell extends React.Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return <InputNumber />;
        }
        return <Input />;
    };

    renderCell = ({ getFieldDecorator }) => {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            children,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item style={{ margin: 0 }}>
                        {getFieldDecorator(dataIndex, {
                            rules: [
                                {
                                    required: true,
                                    message: `Please Input ${title}!`,
                                },
                            ],
                            initialValue: record[dataIndex],
                        })(this.getInput())}
                    </Form.Item>
                ) : (
                        children
                    )}
            </td>
        );
    };

    render() {
        return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
    }
}

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data, editingKey: '' };
        this.columns = [
            {
                title: '学号',
                dataIndex: 'uid',
                width: '10%',
                editable: true,
                align: 'center'
            },
            {
                title: '姓名',
                dataIndex: 'name',
                width: '8%',
                editable: true,
                align: 'center'
            },
            {
                title: '身份证号',
                dataIndex: 'IDNumber',
                width: '15%',
                editable: true,
                align: 'center'
            },
            {
                title: '入学-毕业时间',
                dataIndex: 'inSchoolTime',
                width: '10%',
                editable: true,
                align: 'center'
            },
            {
                title: '类别',
                dataIndex: 'sort',
                width: '8%',
                editable: true,
                align: 'center'
            },
            {
                title: '年级班级',
                dataIndex: 'gradeClass',
                width: '12%',
                editable: true,
                align: 'center'
            },
            {
                title: '专业',
                dataIndex: 'major',
                width: '10%',
                editable: true,
                align: 'center'
            },
            {
                title: '学院',
                dataIndex: 'college',
                width: '10%',
                editable: true,
                align: 'center'
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) => {
                    const { editingKey } = this.state;
                    const editable = this.isEditing(record);
                    return editable ? (
                        <span>
                            <EditableContext.Consumer>
                                {form => (
                                    <a
                                        onClick={() => this.save(form, record.key)}
                                        style={{ marginRight: 8 }}
                                    >保存</a>
                                )}
                            </EditableContext.Consumer>
                            <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                                <a>取消</a>
                            </Popconfirm>
                        </span>
                    ) : (
                            <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>修改</a>
                        );
                },
            },
        ];
    }

    isEditing = record => record.key === this.state.editingKey;

    cancel = () => {
        this.setState({ editingKey: '' });
    };

    save(form, key) {
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            const newData = [...this.state.data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                this.setState({ data: newData, editingKey: '' });
            } else {
                newData.push(row);
                this.setState({ data: newData, editingKey: '' });
            }
        });
    }

    edit(key) {
        this.setState({ editingKey: key });
    }

    render() {
        const components = {
            body: {
                cell: EditableCell,
            },
        };

        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    inputType: col.dataIndex === 'age' ? 'number' : 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });

        return (
            <EditableContext.Provider value={this.props.form}>
                <Table
                    components={components}
                    bordered
                    dataSource={this.state.data}
                    columns={columns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: this.cancel,
                    }}

                />
            </EditableContext.Provider>
        );
    }
}

const EditableFormTable = Form.create()(EditableTable);

export default EditableFormTable