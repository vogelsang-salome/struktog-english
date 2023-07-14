// adds the language function to look up the corresponding language
// all Text elements are saved in sConfig.js (_s.sConfig.KeyToText)
import _s from './lang/lang.js'

class Config {
  constructor () {
    this.data = {
      InsertNode: {
        color: 'rgb(255,255,243)'
      },
      Placeholder: {
        color: 'rgb(255,255,243)'
      },
      InsertCase: {
        color: 'rgb(250, 218, 209)'
      },
      InputNode: {
        use: true,
        id: 'InputButton',
        text: _s.sConfig.inputBlock,
        icon: 'taskIcon',
        color: 'rgb(253, 237, 206)'
      },
      OutputNode: {
        use: true,
        id: 'OutputButton',
        text: _s.sConfig.outputBlock,
        icon: 'taskIcon',
        color: 'rgb(253, 237, 206)'
      },
      TaskNode: {
        use: true,
        id: 'TaskButton',
        text: _s.sConfig.statement,
        icon: 'taskIcon',
        color: 'rgb(253, 237, 206)'
      },
      CountLoopNode: {
        use: true,
        id: 'CountLoopButton',
        text: _s.sConfig.counterControlledLoop,
        icon: 'countLoopIcon',
        color: 'rgb(220, 239, 231)'
      },
      HeadLoopNode: {
        use: true,
        id: 'HeadLoopButton',
        text: _s.sConfig.headerControlledLoop,
        icon: 'countLoopIcon',
        color: 'rgb(220, 239, 231)'
      },
      FootLoopNode: {
        use: true,
        id: 'FootLoopButton',
        text: _s.sConfig.footerControlledLoop,
        icon: 'footLoopIcon',
        color: 'rgb(220, 239, 231)'
      },
      BranchNode: {
        use: true,
        id: 'BranchButton',
        text: _s.sConfig.branch,
        icon: 'branchIcon',
        color: 'rgb(250, 218, 209)'
      },
      CaseNode: {
        use: true,
        id: 'CaseButton',
        text: _s.sConfig.caseDistinction,
        icon: 'caseIcon',
        color: 'rgb(250, 218, 209)'
      },
      FunctionNode: {
        use: true,
        id: 'FunctionButton',
        text: _s.sConfig.functionBlock,
        icon: 'funcIcon',
        color: 'rgb(255, 255, 255)'
      },
      TryCatchNode: {
        use: true,
        id: 'TryCatchButton',
        text: _s.sConfig.tryCatchBlock,
        icon: 'tryCatchIcon',
        color: 'rgb(250, 218, 209)'
      }
    }

    this.alternatives = {
      python: {
        InsertNode: {
          color: 'rgb(255,255,243)'
        },
        Placeholder: {
          color: 'rgb(255,255,243)'
        },
        InsertCase: {
          color: 'rgb(250, 218, 209)'
        },
        InputNode: {
          use: true,
          id: 'InputButton',
          text: _s.sConfig.inputBlock,
          icon: 'taskIcon',
          color: 'rgb(253, 237, 206)'
        },
        OutputNode: {
          use: true,
          id: 'OutputButton',
          text: _s.sConfig.outputBlock,
          icon: 'taskIcon',
          color: 'rgb(253, 237, 206)'
        },
        TaskNode: {
          use: true,
          id: 'TaskButton',
          text: _s.sConfig.statement,
          icon: 'taskIcon',
          color: 'rgb(253, 237, 206)'
        },
        CountLoopNode: {
          use: false,
          id: 'CountLoopButton',
          text: _s.sConfig.counterControlledLoop,
          icon: 'countLoopIcon',
          color: 'rgb(220, 239, 231)'
        },
        HeadLoopNode: {
          use: true,
          id: 'HeadLoopButton',
          text: _s.sConfig.headerControlledLoop,
          icon: 'countLoopIcon',
          color: 'rgb(220, 239, 231)'
        },
        FootLoopNode: {
          use: false,
          id: 'FootLoopButton',
          text: _s.sConfig.footerControlledLoop,
          icon: 'footLoopIcon',
          color: 'rgb(220, 239, 231)'
        },
        BranchNode: {
          use: true,
          id: 'BranchButton',
          text: _s.sConfig.branch,
          icon: 'branchIcon',
          color: 'rgb(250, 218, 209)'
        },
        CaseNode: {
          use: true,
          id: 'CaseButton',
          text: _s.sConfig.caseDistinction,
          icon: 'caseIcon',
          color: 'rgb(250, 218, 209)'
        },
        FunctionNode: {
          use: false,
          id: 'FunctionButton',
          text: _s.sConfig.functionBlock,
          icon: 'funcIcon',
          color: 'rgb(255, 255, 255)'
        },
        TryCatchNode: {
          use: true,
          id: 'TryCatchButton',
          text: _s.sConfig.tryCatchBlock,
          icon: 'tryCatchIcon',
          color: 'rgb(250, 218, 209)'
        }
      },
      python_func: {
        InsertNode: {
          color: 'rgb(255,255,243)'
        },
        Placeholder: {
          color: 'rgb(255,255,243)'
        },
        InsertCase: {
          color: 'rgb(250, 218, 209)'
        },
        InputNode: {
          use: true,
          id: 'InputButton',
          text: _s.sConfig.inputBlock,
          icon: 'taskIcon',
          color: 'rgb(253, 237, 206)'
        },
        OutputNode: {
          use: true,
          id: 'OutputButton',
          text: _s.sConfig.outputBlock,
          icon: 'taskIcon',
          color: 'rgb(253, 237, 206)'
        },
        TaskNode: {
          use: true,
          id: 'TaskButton',
          text: _s.sConfig.statement,
          icon: 'taskIcon',
          color: 'rgb(253, 237, 206)'
        },
        CountLoopNode: {
          use: true,
          id: 'CountLoopButton',
          text: _s.sConfig.counterControlledLoop,
          icon: 'countLoopIcon',
          color: 'rgb(220, 239, 231)'
        },
        HeadLoopNode: {
          use: true,
          id: 'HeadLoopButton',
          text: _s.sConfig.headerControlledLoop,
          icon: 'countLoopIcon',
          color: 'rgb(220, 239, 231)'
        },
        FootLoopNode: {
          use: true,
          id: 'FootLoopButton',
          text: _s.footerControlledLoop,
          icon: 'footLoopIcon',
          color: 'rgb(220, 239, 231)'
        },
        BranchNode: {
          use: true,
          id: 'BranchButton',
          text: _s.sConfig.branch,
          icon: 'branchIcon',
          color: 'rgb(250, 218, 209)'
        },
        CaseNode: {
          use: true,
          id: 'CaseButton',
          text: _s.sConfig.caseDistinction,
          icon: 'caseIcon',
          color: 'rgb(250, 218, 209)'
        },
        FunctionNode: {
          use: true,
          id: 'FunctionButton',
          text: _s.sConfig.functionBlock,
          icon: 'funcIcon',
          color: 'rgb(255, 255, 255)'
        },
        TryCatchNode: {
          use: true,
          id: 'TryCatchButton',
          text: _s.sConfig.tryCatchBlock,
          icon: 'tryCatchIcon',
          color: 'rgb(250, 218, 209)'
        }
      },
      standard: {
        InsertNode: {
          color: 'rgb(255,255,243)'
        },
        Placeholder: {
          color: 'rgb(255,255,243)'
        },
        InsertCase: {
          color: 'rgb(250, 218, 209)'
        },
        InputNode: {
          use: true,
          id: 'InputButton',
          text: _s.sConfig.inputBlock,
          icon: 'taskIcon',
          color: 'rgb(253, 237, 206)'
        },
        OutputNode: {
          use: true,
          id: 'OutputButton',
          text: _s.sConfig.outputBlock,
          icon: 'taskIcon',
          color: 'rgb(253, 237, 206)'
        },
        TaskNode: {
          use: true,
          id: 'TaskButton',
          text: _s.sConfig.statement,
          icon: 'taskIcon',
          color: 'rgb(253, 237, 206)'
        },
        CountLoopNode: {
          use: true,
          id: 'CountLoopButton',
          text: _s.sConfig.counterControlledLoop,
          icon: 'countLoopIcon',
          color: 'rgb(220, 239, 231)'
        },
        HeadLoopNode: {
          use: true,
          id: 'HeadLoopButton',
          text: _s.sConfig.headerControlledLoop,
          icon: 'countLoopIcon',
          color: 'rgb(220, 239, 231)'
        },
        FootLoopNode: {
          use: true,
          id: 'FootLoopButton',
          text: _s.sConfig.footerControlledLoop,
          icon: 'footLoopIcon',
          color: 'rgb(220, 239, 231)'
        },
        BranchNode: {
          use: true,
          id: 'BranchButton',
          text: _s.sConfig.branch,
          icon: 'branchIcon',
          color: 'rgb(250, 218, 209)'
        },
        CaseNode: {
          use: true,
          id: 'CaseButton',
          text: _s.sConfig.caseDistinction,
          icon: 'caseIcon',
          color: 'rgb(250, 218, 209)'
        },
        FunctionNode: {
          use: false,
          id: 'FunctionButton',
          text: _s.sConfig.functionBlock,
          icon: 'funcIcon',
          color: 'rgb(255, 255, 255)'
        },
        TryCatchNode: {
          use: false,
          id: 'TryCatchButton',
          text: _s.sConfig.tryCatchBlock,
          icon: 'tryCatchIcon',
          color: 'rgb(250, 218, 209)'
        }
      }
    }
  }

  get () {
    return this.data
  }

  loadConfig (id) {
    if (id in this.alternatives) {
      this.data = this.alternatives[id]
    }
  }
}

export const config = new Config()
