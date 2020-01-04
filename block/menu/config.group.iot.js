module.exports = {
  name: "WiT32 More",
  index: 15,
  color: "230",
  icon: "/static/icons/SVG/c11.svg",
  blocks: [
    // {
    //   xml:
    //     `<block type="io_setpin">
    //                     <value name="pin">
    //                         <shadow type="math_number">
    //                             <field name="NUM">25</field>
    //                         </shadow>
    //                     </value>
    //                 </block>`
    // },
    {
      xml: `<sep gap="32"></sep><label text="WiT-ESP32 IoT" web-class="headline"></label>`
    },
    //"adc_pin_dummy_input",
    "io_pin_dummy_input",
    
  ]
};
