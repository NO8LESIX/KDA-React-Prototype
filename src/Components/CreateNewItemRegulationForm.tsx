import React from "react";
import "antd/dist/antd.css";
import {Grid, Typography} from "@material-ui/core";
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Checkbox,
  Button,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { ProductInfo } from "../Data/types";
import "../CSS/CreateNewItemForm.css"
import TextArea from "antd/lib/input/TextArea";

//this will be replaced by the JSON tree path to make editing existing items easier.
const residences = [
  {
    value: "itemType",
    label: "Item",
    children: [
      {
        value: "ProductLabel",
        label: "ProductLabel",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};



export default class CNIRegulationForm extends React.Component {

  state = {
    regulation: "",
    regulations: [] as string[],
    relatedItem: "",
    relatedItems: [] as string[],
    example: "",
    examples: [] as string[],
   }


  handleChangeReg = (e: any) => {
    this.setState({
      regulation: e.target.value
    });
    console.log(e.target.value);
  }
  
  handleChangeRelated = (e: any) => {
    this.setState({
      relatedItem: e.target.value
    });
    console.log(e.target.value);
  }

  handleChangeExample = (e: any) => {
    this.setState({
      example: e.target.value
    });
    console.log(e.target.value);
  }

  addRequirement = () => {
    var regArray = this.state.regulations;
    regArray.push(this.state.regulation);
    this.setState({regulations: regArray});
    console.log("Regulations:", this.state.regulations)
  }

  addItem = () => {
    var relArray = this.state.relatedItems;
    relArray.push(this.state.relatedItem);
    this.setState({relatedItems: relArray});
    console.log("relatedItems:", this.state.relatedItems)
  }

  addExample = () => {
    var exArray = this.state.examples;
    exArray.push(this.state.example);
    this.setState({examples: exArray});
    console.log("relatedItems:", this.state.examples)
  }

  onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    const product: ProductInfo = {
      name: values.name,
      category: values.category,
      description: values.description,
      snap: (values.snap? true : false),
      regulatoryRequirements: values.regulatoryRequirements,
      requirements:  this.state.regulations,
      examples: this.state.examples,
      relatedItems: this.state.relatedItems,
      url: (values.url? values.url : "default link. TBD.")
    }
    console.log("Prod:", product);
  };

  render() {
    return (
      <>
        <br />
        <Form className="form"
          {...formItemLayout}
          name="register"
          onFinish={this.onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >

          <Form.Item
            name="name"
            label={
              <span>
                Product Name&nbsp;
                <Tooltip title="What is the name of the product being created?">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
            rules={[
              {
                required: true,
                message: "You must name the product!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="category"
            label={
              <span>
                Product Category&nbsp;
                <Tooltip title="What category does the product belong to?">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
            rules={[
              {
                required: true,
                message: "You must provide a category!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="description"
            label={
              <span>
                Product Description&nbsp;
                <Tooltip title="Provide extra information about the product.">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
            rules={[
              {
                required: true,
                message: "You must describe the product!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="snap"
            label={
              <span>
                SNAP Eligible&nbsp;
                <Tooltip title="Provide extra information about the product.">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
            valuePropName="checked"
            >            
            <Checkbox></Checkbox>
          </Form.Item>

          <Form.Item
            name="regulatoryRequirements"
            label={
              <span>
                Regulatory Requirements&nbsp;
                <Tooltip title="What regulations are required of this product?">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
            rules={[
              {
                required: true,
                message: "You must provide a requirement!",
                whitespace: true,
              },
            ]}
          >
            <TextArea rows={4}/>
          </Form.Item>

          <Form.Item
            name="requirements"
            label={
              <span>
                Product Requirements&nbsp;
                <Tooltip title="What requirements are associated with this product?">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
          >
            <Input onChange={this.handleChangeReg}/>
              <Button className="addButton" type="default" htmlType="button" onClick={this.addRequirement}>
                Add Requirement
              </Button>

            <Grid container direction="column">
                {this.state.regulations.map(regulation => {
                  return (
                    <Grid item>
                      <Typography variant="subtitle1">{regulation}</Typography>
                    </Grid>
                  )
                })}
            </Grid>
          </Form.Item>

          <Form.Item
            name="examples"
            label={
              <span>
                Examples of this item&nbsp;
                <Tooltip title="What are some examples of this product?">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
          >
            <Input onChange={this.handleChangeExample}/>
              <Button className="addButton" type="default" htmlType="button" onClick={this.addExample}>
                Add Example
              </Button>

            <Grid container direction="column">
                {this.state.examples.map(example => {
                  return (
                    <Grid item>
                      <Typography variant="subtitle1">{example}</Typography>
                    </Grid>
                  )
                })}
            </Grid>
          </Form.Item>

          <Form.Item
            name="relatedItems"
            label={
              <span>
                Related Items&nbsp;
                <Tooltip title="What items are related to this product?">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
          >
            <Input onChange={this.handleChangeRelated}/>
              <Button className="addButton" type="default" htmlType="button" onClick={this.addItem}>
                Add Related Item
              </Button>

            <Grid container direction="column">
                {this.state.relatedItems.map(relatedItem => {
                  return (
                    <Grid item>
                      <Typography variant="subtitle1">{relatedItem}</Typography>
                    </Grid>
                  )
                })}
            </Grid>
          </Form.Item>

          <Form.Item
            name="url"
            label={
              <span>
                URL&nbsp;
                <Tooltip title="Is there an image link for this product?">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
          >
            <Input />
          </Form.Item>



          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("Should acknowledge the information."),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I acknowledge that the above information is correct.
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="default" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
        <br />
      </>
    );
  }
}