import React, { Component } from 'react';
import UserCard from './UserCard';
import RecipeCard from './RecipeCard';

class CardContainer extends Component {
   constructor(props) {
      super(props);

      this.state = {
         items: [],
         log: {},
         contentType: ''
      };

      this.onRemove = this.onRemove.bind(this);
   }

   componentDidMount() {
      let contentType = this.props.content;

      if (contentType !== this.state.contentType) {
         const storageLength = window.localStorage.length;
         let key;
         let item;
         let decodedItem;

         const array = [];
         let log = {};
         log["type"] = contentType;
         for (let i = 0; i < storageLength; i++) {
            key = window.localStorage.key(i);
            if (key.substring(0, 5) === contentType || key.substring(0, 7) === contentType) {
               item = window.localStorage.getItem(key);
               decodedItem = JSON.parse(item);
               log[key] = decodedItem;
               array.push(decodedItem);
            }
         }

         this.setState(() => ({
            items: array,
            log: log,
            contentType: contentType
         }))
      }
   }

   onRemove(identifier) {
      window.localStorage.removeItem(this.state.contentType + identifier);
      this.setState(() => {
         const list = this.state.items.filter(element => {
            return (element.user_id !== identifier && element.recipe_id !== identifier);
         });

         return {
            items: list,
         };
      });
   }

   render() {
      return (
         <div style={{ width: '100%', paddingLeft: '8%' }}>
            <div className="col s11 offset-s1">
               {(this.state.items || []).map(item => {
                  if (this.state.contentType === "user_") {
                     return <UserCard item={item} key={item.user_id} remove={this.onRemove} />;
                  } else {
                     return <RecipeCard item={item} key={item.recipe_id} remove={this.onRemove} />;
                  }
               })
               }
            </div>
         </div>
      )
   }
}

export default CardContainer;