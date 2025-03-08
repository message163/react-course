import './index.css';
import { createPortal } from 'react-dom';
export const Modal = () => {
  return createPortal(<div className="modal">
    <div className="modal-header">
      <div className="modal-title">标题</div>
    </div>
    <div className="modal-content">
      <h1>Modal</h1>
    </div>
    <div className="modal-footer">
      <button className="modal-close-button">关闭</button>
        <button className="modal-confirm-button">确定</button>
      </div>
    </div>,
    document.body
  )
}